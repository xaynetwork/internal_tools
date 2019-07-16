import React from 'react';

import contentModules from '../content';
import '../assets/typography/Circular-Bold.woff';
import '../assets/typography/Circular-Regular.woff';

interface PreviewProps {
  language: string;
  name: string;
  role: string;
  phone: string;
  email: string;
}

const links = [
  {
    url: 'https://www.instagram.com/xaynhq/',
    name: 'Instagram',
    // Important! Use the asset link which is hosted on our domain
    iconSrc: 'https://xayn.com/instagram-icon',
  },
  {
    url: 'https://twitter.com/XaynHQ',
    name: 'Twitter',
    // Important! Use the asset link which is hosted on our domain
    iconSrc: 'https://xayn.com/twitter-icon',
  },
  {
    url: 'https://www.linkedin.com/company/xaynhq',
    name: 'LinkedIn',
    // Important! Use the asset link which is hosted on our domain
    iconSrc: 'https://xayn.com/linkedin-icon',
  },
];

const Preview: React.FC<PreviewProps> = ({
  language,
  name,
  role,
  phone,
  email,
}) => {
  const labels = contentModules[language] || contentModules.de;
  const info = contentModules.common;
  const defaultStyle = {
    margin: 0,
    fontSize: 12,
    fontFamily: 'Circular, sans-serif',
    lineHeight: 1.5,
    color: '#222222',
  };
  const footerStyle = {
    fontSize: 8,
    fontFamily: 'Circular, sans-serif',
    lineHeight: 1.5,
    color: '#787878',
  };

  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td>
            <div>
              <p style={{ ...defaultStyle, marginBottom: 10 }}>
                <b>{labels.regards},</b>
              </p>
              <p style={{ ...defaultStyle, marginBottom: 10 }}>
                <b style={{ color: '#22A186' }}>{name}</b>
                <br />
                <span style={{ color: '#787878' }}>{role}</span>
              </p>
              <div style={{ ...defaultStyle, marginBottom: 0 }}>
                <div>
                  <a
                    href="https://xayn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                    }}
                  >
                    <img
                      // Important! Use the asset link which is hosted on our domain
                      src="https://xayn.com/discover-image"
                      alt="Xayn"
                      style={{
                        maxWidth: 325,
                        verticalAlign: 'bottom',
                      }}
                    />
                  </a>
                </div>
              </div>
              <br />
              <br />
              <p style={defaultStyle}>
                <span>{info.name}</span>
                <br />
                <span>{info.street}</span>
                <br />
                <span>{`${info.postal} ${info.city}`}</span>
              </p>
              <p style={defaultStyle}>
                {phone && (
                  <>
                    <span>
                      <b>{labels.phone}</b>: {phone}
                    </span>
                    <br />
                  </>
                )}
                {email && (
                  <>
                    <span>
                      <b>{labels.email}</b>:{' '}
                      <a href={`mailto:${email}`} style={{ color: '#E51674' }}>
                        {email}
                      </a>
                    </span>
                    <br />
                  </>
                )}
                <span>
                  <b>{labels.web}</b>:{' '}
                  <a
                    href="https://xayn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#E51674' }}
                  >
                    xayn.com
                  </a>
                </span>
                <br />
                <br />
                <div>
                  {links.map((link) => (
                    <span key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={link.iconSrc} alt={link.name} />
                      </a>
                      &nbsp;
                    </span>
                  ))}
                </div>
              </p>
              <br />
              <p style={footerStyle}>
                <span>
                  {labels.boardChairman}: {info.supervisoryBoardChairman}
                </span>
                <br />
                <span>
                  {labels.executiveBoard}: {info.executiveBoard} (
                  {labels.chairman})
                </span>
                <br />
                <span>
                  {labels.vatId}: {info.vatId}
                </span>
                <br />
                <span>
                  {labels.registerCourt}: {info.registerCourt}
                </span>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Preview;