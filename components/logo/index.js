import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ linkClass = '', nameColorClass = '' }) => {
    return (
        <Link href="/">
                <a className={`logo ${linkClass}`}>
                    <Image
                        src="/img/logo.jpg"
                        className="logo__img"
                        alt="Boost-Store"
                        title="Перейти на главную страницу"
                        width="55px"
                        height="55px"
                    />

                    <div className='logo__name'>
                        <span className={`logo__name-item ${nameColorClass}`}>Boost</span>
                        <span className='logo__name-item'>Center</span>
                    </div>
                </a>
            </Link>
    );
}

export default Logo;