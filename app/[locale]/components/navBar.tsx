'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
export default function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  // const pathname = usePathname();
    return (
        <>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" role="button" aria-haspopup="true"
                            aria-expanded="false">{t('nav_home')}<span className="caret"></span></a>

                    </li>

                    <li className="dropdown">
                        <a href="#thucdon" className="dropdown-toggle" role="button" aria-haspopup="true"
                            aria-expanded="false">{t('nav_menu')}<span className="caret"></span></a>

                    </li>
                    <li className="dropdown">
                        <a href="#km" className="dropdown-toggle" role="button" aria-haspopup="true"
                            aria-expanded="false">{t('nav_promotions')}<span className="caret"></span></a>

                    </li>
                    <li className="dropdown">
                        <a href="#datban" className="dropdown-toggle" role="button" aria-haspopup="true"
                            aria-expanded="false">{t('nav_reservations')}<span className="caret"></span></a>

                    </li>
<li className="dropdown" style={{ marginLeft: '15px' }}>
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            🌐 {locale === 'en' ? 'English' : 'Tiếng Việt'} <span className="caret"></span>
          </a>

          <ul className="dropdown-menu">
            <li>
              <Link
                href={'/en'}
                className="dropdown-item"
                style={{ color: locale === 'en' ? '#007bff' : '#333' }}
              >
                🇬🇧 English
              </Link>
            </li>
            <li>
              <Link
                href={'/vi'}
                className="dropdown-item"
                style={{ color: locale === 'vi' ? '#007bff' : '#333' }}
              >
                🇻🇳 Tiếng Việt
              </Link>
            </li>
          </ul>
        </li>

                </ul>
            </div>
        </>
    )
}
