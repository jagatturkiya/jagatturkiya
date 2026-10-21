import React, { useEffect, useRef } from 'react';

/**
 * LiquidHero Component
 * WebGL-powered liquid silk distortion with metallic silver/platinum highlights.
 * Deep obsidian black (#060607) with rich, responsive fluid currents.
 * Fully optimized for both Mobile touch devices and Desktop mouse interaction.
 */
export default function LiquidHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId = null;
    let destroyed = false;

    let gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let lastUserInteraction = 0;

    const updateCoords = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (clientX - rect.left) * (canvas.width / rect.width);
      targetMouseY = (rect.height - (clientY - rect.top)) * (canvas.height / rect.height);
      lastUserInteraction = performance.now();
    };

    const onMouseMove = (e) => {
      updateCoords(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        updateCoords(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    if (!gl) {
      // 2D Fallback for older devices without WebGL
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resize2D = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(rect.height * dpr);
        targetMouseX = canvas.width * 0.5;
        targetMouseY = canvas.height * 0.5;
      };

      resize2D();
      window.addEventListener('resize', resize2D);

      const startTime2D = performance.now();
      const render2D = (now) => {
        if (destroyed) return;
        const elapsed = (now - startTime2D) * 0.001;
        const w = canvas.width;
        const h = canvas.height;

        const isIdle = (now - lastUserInteraction) > 2500;
        if (isIdle) {
          targetMouseX = (0.5 + 0.28 * Math.sin(elapsed * 0.6)) * w;
          targetMouseY = (0.5 + 0.24 * Math.cos(elapsed * 0.45)) * h;
        }

        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        ctx.fillStyle = '#060607';
        ctx.fillRect(0, 0, w, h);

        const radius = Math.max(w, h) * 0.65;
        const grad = ctx.createRadialGradient(mouseX, h - mouseY, 10, mouseX, h - mouseY, radius);
        grad.addColorStop(0, 'rgba(62, 66, 78, 0.45)');
        grad.addColorStop(0.45, 'rgba(22, 23, 28, 0.28)');
        grad.addColorStop(1, 'rgba(6, 6, 7, 0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        animId = requestAnimationFrame(render2D);
      };

      animId = requestAnimationFrame(render2D);

      return () => {
        destroyed = true;
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchstart', onTouchMove);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('resize', resize2D);
      };
    }

    const isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;

    const vsSource = isWebGL2 ? `#version 300 es
      in vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    ` : `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = isWebGL2 ? `#version 300 es
      precision highp float;
      uniform float u_time;
      uniform float u_pixelRatio;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      out vec4 fragColor;

      #define TWO_PI 6.28318530718

      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        float x1 = mix(a, b, u.x);
        float x2 = mix(c, d, u.x);
        return mix(x1, x2, u.y);
      }

      vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
        vec3 color1 = c1.rgb * c1.a;
        vec3 color2 = c2.rgb * c2.a;
        vec3 color3 = c3.rgb * c3.a;

        float r1 = smoothstep(0.0 + 0.35 * edgesWidth, 0.7 - 0.35 * edgesWidth + 0.5 * edge_blur, mixer);
        float r2 = smoothstep(0.3 + 0.35 * edgesWidth, 1.0 - 0.35 * edgesWidth + edge_blur, mixer);

        vec3 blended_color_2 = mix(color1, color2, r1);
        float blended_opacity_2 = mix(c1.a, c2.a, r1);

        vec3 c = mix(blended_color_2, color3, r2);
        float o = mix(blended_opacity_2, c3.a, r2);
        return vec4(c, o);
      }

      void main() {
        float t = 0.32 * u_time;
        float minDim = min(u_resolution.x, u_resolution.y);

        // Responsive normalization: guarantees identical fluid scale on mobile portrait & desktop widescreen
        vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / minDim;
        st = rotate(st, 0.16 * sin(t * 0.4));

        // Fluid noise turbulence
        float n1 = noise(st * 1.6 + t * 0.55);
        float n2 = noise(st * 2.5 - t * 0.4);
        float angle = n1 * TWO_PI;
        st.x += 0.22 * n2 * cos(angle);
        st.y += 0.22 * n2 * sin(angle);

        // Multi-frequency wave currents
        for (float i = 1.0; i <= 5.0; i++) {
          st.x += (0.42 / i) * cos(t * 0.75 + i * 1.35 * st.y);
          st.y += (0.42 / i) * sin(t * 0.75 + i * 1.15 * st.x);
        }

        // Touch & cursor interaction
        vec2 mouseST = (u_mouse - 0.5 * u_resolution.xy) / minDim;
        float distToMouse = length(st - mouseST);
        st += (st - mouseST) * exp(-distToMouse * 4.5) * 0.09;

        // Wave folds & dynamic mixer
        float shape = 0.5 + 0.5 * sin(st.x * 3.0) * cos(st.y * 3.0);
        float mixer = clamp(shape, 0.0, 1.0);

        // Rich metallic silver/platinum on deep obsidian black
        vec4 c1 = vec4(0.024, 0.024, 0.028, 1.0); // #060607 Deep Obsidian
        vec4 c2 = vec4(0.086, 0.090, 0.108, 1.0); // #16171c Charcoal graphite
        vec4 c3 = vec4(0.245, 0.258, 0.298, 1.0); // #3e424c Silky metallic silver highlight

        vec4 col = blend_colors(c1, c2, c3, mixer, 0.32, 0.22);

        // Smooth subtle vignette
        vec2 centerUV = (gl_FragCoord.xy / u_resolution.xy) - 0.5;
        float vignette = 1.0 - dot(centerUV, centerUV) * 0.85;
        col.rgb *= clamp(vignette, 0.0, 1.0);

        fragColor = col;
      }
    ` : `
      precision highp float;
      uniform float u_time;
      uniform float u_pixelRatio;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      #define TWO_PI 6.28318530718

      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        float x1 = mix(a, b, u.x);
        float x2 = mix(c, d, u.x);
        return mix(x1, x2, u.y);
      }

      vec4 blend_colors(vec4 c1, vec4 c2, vec4 c3, float mixer, float edgesWidth, float edge_blur) {
        vec3 color1 = c1.rgb * c1.a;
        vec3 color2 = c2.rgb * c2.a;
        vec3 color3 = c3.rgb * c3.a;

        float r1 = smoothstep(0.0 + 0.35 * edgesWidth, 0.7 - 0.35 * edgesWidth + 0.5 * edge_blur, mixer);
        float r2 = smoothstep(0.3 + 0.35 * edgesWidth, 1.0 - 0.35 * edgesWidth + edge_blur, mixer);

        vec3 blended_color_2 = mix(color1, color2, r1);
        float blended_opacity_2 = mix(c1.a, c2.a, r1);

        vec3 c = mix(blended_color_2, color3, r2);
        float o = mix(blended_opacity_2, c3.a, r2);
        return vec4(c, o);
      }

      void main() {
        float t = 0.32 * u_time;
        float minDim = min(u_resolution.x, u_resolution.y);

        vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / minDim;
        st = rotate(st, 0.16 * sin(t * 0.4));

        float n1 = noise(st * 1.6 + t * 0.55);
        float n2 = noise(st * 2.5 - t * 0.4);
        float angle = n1 * TWO_PI;
        st.x += 0.22 * n2 * cos(angle);
        st.y += 0.22 * n2 * sin(angle);

        for (float i = 1.0; i <= 5.0; i++) {
          st.x += (0.42 / i) * cos(t * 0.75 + i * 1.35 * st.y);
          st.y += (0.42 / i) * sin(t * 0.75 + i * 1.15 * st.x);
        }

        vec2 mouseST = (u_mouse - 0.5 * u_resolution.xy) / minDim;
        float distToMouse = length(st - mouseST);
        st += (st - mouseST) * exp(-distToMouse * 4.5) * 0.09;

        float shape = 0.5 + 0.5 * sin(st.x * 3.0) * cos(st.y * 3.0);
        float mixer = clamp(shape, 0.0, 1.0);

        vec4 c1 = vec4(0.024, 0.024, 0.028, 1.0);
        vec4 c2 = vec4(0.086, 0.090, 0.108, 1.0);
        vec4 c3 = vec4(0.245, 0.258, 0.298, 1.0);

        vec4 col = blend_colors(c1, c2, c3, mixer, 0.32, 0.22);

        vec2 centerUV = (gl_FragCoord.xy / u_resolution.xy) - 0.5;
        float vignette = 1.0 - dot(centerUV, centerUV) * 0.85;
        col.rgb *= clamp(vignette, 0.0, 1.0);

        gl_FragColor = col;
      }
    `;

    function createShader(glCtx, type, source) {
      const shader = glCtx.createShader(type);
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'a_position');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uPixelRatio = gl.getUniformLocation(program, 'u_pixelRatio');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const displayW = Math.round(rect.width * dpr);
      const displayH = Math.round(rect.height * dpr);

      if (canvas.width !== displayW || canvas.height !== displayH) {
        canvas.width = displayW;
        canvas.height = displayH;
        gl.viewport(0, 0, canvas.width, canvas.height);
        targetMouseX = canvas.width * 0.5;
        targetMouseY = canvas.height * 0.5;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const startTime = performance.now();

    const render = (now) => {
      if (destroyed) return;

      const elapsed = (now - startTime) * 0.001;

      // When user is not actively interacting, gently swirl the fluid autonomously
      const isIdle = (now - lastUserInteraction) > 2000;
      if (isIdle) {
        targetMouseX = (0.5 + 0.3 * Math.sin(elapsed * 0.55)) * canvas.width;
        targetMouseY = (0.5 + 0.25 * Math.cos(elapsed * 0.42)) * canvas.height;
      }

      mouseX += (targetMouseX - mouseX) * 0.055;
      mouseY += (targetMouseY - mouseY) * 0.055;

      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.enableVertexAttribArray(posAttr);
      gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(uTime, elapsed);
      gl.uniform1f(uPixelRatio, Math.min(window.devicePixelRatio || 1, 2));
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      destroyed = true;
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-liquid-canvas" aria-hidden="true" />;
}
