/**
 * Jagat Turkiya — Executive Dark Obsidian Fluid Engine
 * WebGL-powered liquid silk distortion with metallic silver/platinum highlights.
 * Designed to be predominantly deep obsidian black (#08080a) with subtle,
 * hypnotic silvery fluid currents swirling in the dark background.
 * Zero bright white wash. Ultra-premium, executive, 60fps.
 * Reusable across Home and Mastermind hero sections.
 */

(function () {
  'use strict';

  function setupFluidCanvas(canvas) {
    if (!canvas || canvas.dataset.fluidInitialized) return;
    canvas.dataset.fluidInitialized = 'true';

    let gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    // If WebGL is not available, use refined 2D Canvas fallback
    if (!gl) {
      initCanvas2DFallback(canvas);
      return;
    }

    const isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;

    // Vertex Shader
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

    // Fragment Shader (Digital Dhairya Liquid Swirl Algorithm)
    const fsSource = isWebGL2 ? `#version 300 es
      precision highp float;
      uniform float u_time;
      uniform float u_pixelRatio;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      out vec4 fragColor;

      #define TWO_PI 6.28318530718
      #define PI 3.14159265358979323846

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
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float t = 0.28 * u_time;

        // Subtle aspect adjustment
        float aspect = u_resolution.x / u_resolution.y;
        vec2 st = uv - 0.5;
        st.x *= aspect;
        st = rotate(st, 0.15 * sin(t * 0.4));
        st += 0.5;

        // Noise displacement
        float n1 = noise(st * 1.4 + t * 0.6);
        float n2 = noise(st * 2.2 - t * 0.4);
        float angle = n1 * TWO_PI;
        st.x += 0.18 * n2 * cos(angle);
        st.y += 0.18 * n2 * sin(angle);

        // Fluid swirl iterations
        for (float i = 1.0; i <= 5.0; i++) {
          st.x += (0.45 / i) * cos(t * 0.8 + i * 1.4 * st.y);
          st.y += (0.45 / i) * sin(t * 0.8 + i * 1.1 * st.x);
        }

        // Mouse ripple influence
        vec2 mouseUV = u_mouse / u_resolution;
        float distToMouse = length(uv - mouseUV);
        st += (uv - mouseUV) * exp(-distToMouse * 5.0) * 0.08;

        // Generate fluid wave intensity
        float shape = 0.5 + 0.5 * sin(st.x * 2.8) * cos(st.y * 2.8);
        float mixer = clamp(shape, 0.0, 1.0);

        // COLOR PALETTE: Pure Obsidian + Metallic Graphite + Subtle Silver Silk
        vec4 c1 = vec4(0.031, 0.031, 0.039, 1.0); // #08080a Deep Obsidian
        vec4 c2 = vec4(0.078, 0.078, 0.094, 1.0); // #141418 Dark Graphite
        vec4 c3 = vec4(0.196, 0.204, 0.235, 1.0); // #32343c Metallic Silver Highlight

        vec4 col = blend_colors(c1, c2, c3, mixer, 0.35, 0.2);

        // Gentle vignette to keep edges deep black
        vec2 centerUV = uv - 0.5;
        float vignette = 1.0 - dot(centerUV, centerUV) * 0.95;
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
      #define PI 3.14159265358979323846

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
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float t = 0.28 * u_time;

        float aspect = u_resolution.x / u_resolution.y;
        vec2 st = uv - 0.5;
        st.x *= aspect;
        st = rotate(st, 0.15 * sin(t * 0.4));
        st += 0.5;

        float n1 = noise(st * 1.4 + t * 0.6);
        float n2 = noise(st * 2.2 - t * 0.4);
        float angle = n1 * TWO_PI;
        st.x += 0.18 * n2 * cos(angle);
        st.y += 0.18 * n2 * sin(angle);

        for (float i = 1.0; i <= 5.0; i++) {
          st.x += (0.45 / i) * cos(t * 0.8 + i * 1.4 * st.y);
          st.y += (0.45 / i) * sin(t * 0.8 + i * 1.1 * st.x);
        }

        vec2 mouseUV = u_mouse / u_resolution;
        float distToMouse = length(uv - mouseUV);
        st += (uv - mouseUV) * exp(-distToMouse * 5.0) * 0.08;

        float shape = 0.5 + 0.5 * sin(st.x * 2.8) * cos(st.y * 2.8);
        float mixer = clamp(shape, 0.0, 1.0);

        vec4 c1 = vec4(0.031, 0.031, 0.039, 1.0);
        vec4 c2 = vec4(0.078, 0.078, 0.094, 1.0);
        vec4 c3 = vec4(0.196, 0.204, 0.235, 1.0);

        vec4 col = blend_colors(c1, c2, c3, mixer, 0.35, 0.2);

        vec2 centerUV = uv - 0.5;
        float vignette = 1.0 - dot(centerUV, centerUV) * 0.95;
        col.rgb *= clamp(vignette, 0.0, 1.0);

        gl_FragColor = col;
      }
    `;

    function createShader(glCtx, type, source) {
      const shader = glCtx.createShader(type);
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('Shader compile log:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (!vertShader || !fragShader) {
      initCanvas2DFallback(canvas);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link log:', gl.getProgramInfoLog(program));
      initCanvas2DFallback(canvas);
      return;
    }

    gl.useProgram(program);

    // Full screen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ]), gl.STATIC_DRAW);

    const aPositionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uPixelLoc = gl.getUniformLocation(program, 'u_pixelRatio');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;
    let startTime = performance.now();
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    function resize() {
      const parent = canvas.parentElement || document.body;
      const rect = parent.getBoundingClientRect();
      width = Math.floor(rect.width) || window.innerWidth;
      height = Math.floor(rect.height) || Math.floor(window.innerHeight * 0.85);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform1f(uPixelLoc, dpr);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) * dpr;
      mouse.targetY = (canvas.height - (e.clientY - rect.top) * dpr);
    });

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      obs.observe(canvas.parentElement || canvas);
    }

    resize();

    function render(currentTime) {
      if (isVisible) {
        const elapsed = (currentTime - startTime) * 0.001;

        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        gl.useProgram(program);
        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform2f(uMouseLoc, mouse.x, mouse.y);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  // 2D Canvas Fallback
  function initCanvas2DFallback(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;

    function resize() {
      const rect = (canvas.parentElement || document.body).getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    function loop() {
      time += 0.015;
      ctx.fillStyle = '#08080a';
      ctx.fillRect(0, 0, width, height);

      const grad = ctx.createLinearGradient(0, height * 0.3, 0, height);
      grad.addColorStop(0, 'rgba(38, 40, 48, 0.45)');
      grad.addColorStop(0.5, 'rgba(20, 20, 26, 0.25)');
      grad.addColorStop(1, 'rgba(8, 8, 10, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(0, height * 0.5);
      for (let x = 0; x <= width; x += 40) {
        const y = height * 0.5 + Math.sin(time + x * 0.004) * 40 + Math.cos(time * 0.7 + x * 0.002) * 20;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  function initAllFluids() {
    const canvases = document.querySelectorAll('.hero-liquid-canvas, #liquidHeroCanvas');
    canvases.forEach(setupFluidCanvas);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllFluids);
  } else {
    initAllFluids();
  }
})();
