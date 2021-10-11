import Link from "next/link";
import {useRouter} from "next/router";

export const LanguageSwitcher = ({ isFooter }) => {
    const router = useRouter();
    const langName = router.locale === "ru" ? "RUS" : "ENG";
    const switcherClasses = (isFooter) ? 'select footer__select' : 'select header__select header__select-lang';

    return (
        <div className={ switcherClasses }>
            <div className="select__field">
                <span className="select__field-text">{ langName }</span>
                <svg className="select__field-icon" width="9" height="5" viewBox="0 0 9 5" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.74694 4.89542L8.90279 0.609586C9.03566 0.467701 9.03185 0.241607 8.89427 0.104577C8.76005 -0.0291042 8.54729 -0.0291042 8.4131 0.104577L4.5021 4.13791L0.591098 0.104577C0.455871 -0.0348594 0.236633 -0.0348594 0.101406 0.104577C-0.0338011 0.244055 -0.0338011 0.470128 0.101406 0.609586L4.25725 4.89542C4.3925 5.03486 4.61172 5.03486 4.74694 4.89542Z"/>
                </svg>
            </div>
            <div className="select__wrap-list">
                <ul className="select__list">
                    <li className="select__list-item">
                        <Link href="/" locale="ru">
                            <a className={`select__list-link ${ router.locale === "ru" ? "select__list-link_active" : null }`}>RUS</a>
                        </Link>
                    </li>
                    <li className="select__list-item">
                        <Link href="/" locale="en">
                            <a className={`select__list-link ${ router.locale === "en" ? "select__list-link_active" : null }`}>ENG</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}