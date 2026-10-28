import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page" style={{ backgroundColor: '#070D18', color: '#CBD5E1', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #070D18 100%)',
        padding: '6rem 1rem 3.5rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FF7900',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            marginBottom: '14px'
          }}>
            🔒 Privacy &amp; Data Protection
          </span>
          <h1 style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-1px',
            margin: '0 0 16px 0'
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto'
          }}>
            We respect your privacy and are deeply committed to protecting your personal information.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <main style={{ maxWidth: '840px', margin: '0 auto', padding: '40px 20px 0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* Introduction */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Introduction
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                Welcome to <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong>. We respect your privacy and are deeply committed to protecting your <strong style={{ color: '#F1F5F9' }}>personal information</strong>.
              </p>
              <p style={{ margin: 0 }}>
                This <strong style={{ color: '#F1F5F9' }}>Privacy Policy</strong> outlines our practices regarding the collection, use, and disclosure of your information when you use our website, digital products, and coaching services. By accessing our platform, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Who We Are */}
          <section style={{ backgroundColor: '#0F1E36', border: '1px solid #1E3A5F', borderRadius: '16px', padding: '24px 28px' }}>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Who We Are
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                <strong style={{ color: '#F1F5F9' }}>Jagat Turkiya</strong> is a premium transformational coaching platform dedicated to helping individuals improve their mindset, relationships, and overall life success.
              </p>
              <p style={{ margin: 0 }}>
                Our primary goal is to provide a safe, secure, and inspiring environment for personal growth. We ensure that your data is handled with the same level of care and integrity that we apply to our coaching sessions.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Information We Collect
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This <strong style={{ color: '#F1F5F9' }}>personal information</strong> may include, but is not limited to:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span><strong style={{ color: '#F1F5F9' }}>Identity Data:</strong> First name and last name.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span><strong style={{ color: '#F1F5F9' }}>Contact Data:</strong> Email address and phone number.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span><strong style={{ color: '#F1F5F9' }}>Transaction Data:</strong> Details about payments and services you have purchased.</span>
                </li>
              </ul>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* How We Use Your Information */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              How We Use Your Information
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                We use the collected data for various purposes to ensure you receive the highest quality of service and support during your transformation journey:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>To provide, maintain, and improve our coaching programs.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>To manage your account and process transactions securely.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#FF7900' }}>•</span>
                  <span>To communicate with you regarding updates, offers, and session details.</span>
                </li>
              </ul>

              <div style={{
                backgroundColor: 'rgba(255, 121, 0, 0.1)',
                border: '1px solid rgba(255, 121, 0, 0.25)',
                borderRadius: '12px',
                padding: '16px 20px',
                color: '#FFB066',
                fontWeight: 600,
                fontSize: '1.05rem',
                textAlign: 'center'
              }}>
                "We never sell, rent, or misuse your personal information."
              </div>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Log Data */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Log Data
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                Like many site operators, we collect information that your browser sends whenever you visit our website ("Log Data").
              </p>
              <p style={{ margin: 0 }}>
                This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other relevant statistics.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Cookies Policy */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Cookies Policy
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                Cookies are files with small amounts of data, which may include an anonymous unique identifier. We use "cookies" to collect information and improve our service.
              </p>
              <p style={{ margin: 0 }}>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site securely.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Third-Party Services */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Third-Party Services
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, or to perform Service-related functions (e.g., secure payment processing and analytics).
              </p>
              <p style={{ margin: 0 }}>
                These third parties have access to your <strong style={{ color: '#F1F5F9' }}>personal information</strong> only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Data Security */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Data Security
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ marginBottom: '14px' }}>
                The security of your <strong style={{ color: '#F1F5F9' }}>personal information</strong> is incredibly important to us. We implement a variety of industry-standard security measures to maintain the safety of your personal data.
              </p>
              <p style={{ margin: 0 }}>
                However, please remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* External Links */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              External Links
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                Our platform may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the <strong style={{ color: '#F1F5F9' }}>Privacy Policy</strong> of every site you visit.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Children’s Privacy */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Children’s Privacy
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                Our coaching programs and services do not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Legal Compliance */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Legal Compliance
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                We will disclose your <strong style={{ color: '#F1F5F9' }}>personal information</strong> where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement.
              </p>
            </div>
          </section>

          <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', margin: 0 }} />

          {/* Policy Updates */}
          <section>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.45rem',
              fontWeight: 700,
              color: '#ffffff',
              borderLeft: '4px solid #FF7900',
              paddingLeft: '14px',
              marginBottom: '16px'
            }}>
              Policy Updates
            </h2>
            <div style={{ lineHeight: '1.8', color: '#94A3B8', fontSize: '1.02rem', paddingLeft: '18px' }}>
              <p style={{ margin: 0 }}>
                We may update our <strong style={{ color: '#F1F5F9' }}>Privacy Policy</strong> from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a prominent "Last Updated" date. You are advised to review this page periodically for any changes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section style={{
            backgroundColor: '#0F1E36',
            border: '1px solid #1E3A5F',
            borderRadius: '16px',
            padding: '28px 24px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '10px'
            }}>
              Contact Us
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#94A3B8',
              maxWidth: '600px',
              margin: '0 auto 18px auto',
              lineHeight: 1.6
            }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please don't hesitate to reach out to our dedicated support team.
            </p>
            <a
              href="mailto:hello@jagatturkiya.com"
              style={{
                color: '#FF7900',
                fontSize: '1.1rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              ✉️ hello@jagatturkiya.com
            </a>
          </section>

          {/* Footer reassurance note */}
          <div style={{
            backgroundColor: '#1E293B',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '16px 20px',
            textAlign: 'center',
            color: '#E2E8F0',
            fontSize: '1.02rem'
          }}>
            Thank you for trusting <span style={{ color: '#FF7900', fontWeight: 700 }}>Jagat Turkiya</span> with your transformation journey. Your privacy is safe with us.
          </div>

        </div>
      </main>
    </div>
  );
}
