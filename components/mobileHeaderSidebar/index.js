import Link from 'next/link';

const MobileHeaderSidebar = () => {
    return (
        <div className="sidebar__btn-box">
            <Link href="#">
                <a className="sidebar__btn-search">
                    <img src="img/icons/search-button.svg" alt=""/>
                </a>
            </Link>
            <Link href="/profile">
                <a className="sidebar__btn-cart">
                    <img src="img/icons/user.svg" alt=""/>
                </a>
            </Link>
            <Link href="#">
                <a className="sidebar__cart-btn">
                    <img src="img/icons/cart.svg" alt=""/>
                </a>
            </Link>
        </div>
    );
}

export default MobileHeaderSidebar;