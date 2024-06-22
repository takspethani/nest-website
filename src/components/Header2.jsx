import React from 'react';

const Header = () => {
    return (
        <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
                <div className="header-wrap header-space-between position-relative">
                    <div className="logo logo-width-1 d-block d-lg-none">
                        <a href='/'><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                    </div>
                    <div className="header-nav d-none d-lg-flex">
                        <div className="main-categori-wrap d-none d-lg-block">
                            <a className="categories-button-active" href="#">
                                <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                                <i className="fi-rs-angle-down"></i>
                            </a>
                            <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                <div className="d-flex categori-dropdown-inner">
                                    <ul>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Milks and Dairies</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Clothing & beauty</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods & Toy</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-4.svg" alt="" />Baking material</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</a>
                                        </li>
                                    </ul>
                                    <ul className="end">
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-6.svg" alt="" />Wines & Drinks</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-7.svg" alt="" />Fresh Seafood</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-8.svg" alt="" />Fast food</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-9.svg" alt="" />Vegetables</a>
                                        </li>
                                        <li>
                                            <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/category-10.svg" alt="" />Bread and Juice</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="more_slide_open" style={{ display: 'none' }}>
                                    <div className="d-flex categori-dropdown-inner">
                                        <ul>
                                            <li>
                                                <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />Milks and Dairies</a>
                                            </li>
                                            <li>
                                                <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />Clothing & beauty</a>
                                            </li>
                                        </ul>
                                        <ul className="end">
                                            <li>
                                                <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />Wines & Drinks</a>
                                            </li>
                                            <li>
                                                <a href='/shop-grid-right'> <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />Fresh Seafood</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="more_categories"><span className="icon"></span> <span className="heading-sm-1">Show more...</span></div>
                            </div>
                        </div>
                        <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                            <nav>
                                <ul>
                                    <li className="hot-deals"><img src="assets/imgs/theme/icons/icon-hot.svg" alt="hot deals" /><a href='/shop-grid-right'>Deals</a></li>
                                    <li>
                                        <a className='active' href='/'>Home <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='/'>Home 1</a></li>
                                            <li><a href='/index-2'>Home 2</a></li>
                                            <li><a href='/index-3'>Home 3</a></li>
                                            <li><a href='/index-4'>Home 4</a></li>
                                            <li><a href='/index-5'>Home 5</a></li>
                                            <li><a href='/index-6'>Home 6</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='/page-about'>About</a>
                                    </li>
                                    <li>
                                        <a href='/shop-grid-right'>Shop <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='/shop-grid-right'>Shop Grid – Right Sidebar</a></li>
                                            <li><a href='/shop-grid-left'>Shop Grid – Left Sidebar</a></li>
                                            <li><a href='/shop-list-right'>Shop List – Right Sidebar</a></li>
                                            <li><a href='/shop-list-left'>Shop List – Left Sidebar</a></li>
                                            <li><a href='/shop-fullwidth'>Shop - Wide</a></li>
                                            <li>
                                                <a href="#">Single Product <i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu">
                                                    <li><a href='/shop-product-right'>Product – Right Sidebar</a></li>
                                                    <li><a href='/shop-product-left'>Product – Left Sidebar</a></li>
                                                    <li><a href='/shop-product-full'>Product – No sidebar</a></li>
                                                    <li><a href='/shop-product-vendor'>Product – Vendor Infor</a></li>
                                                </ul>
                                            </li>
                                            <li><a href='/shop-filter'>Shop – Filter</a></li>
                                            <li><a href='/shop-wishlist'>Shop – Wishlist</a></li>
                                            <li><a href='/shop-cart'>Shop – Cart</a></li>
                                            <li><a href='/shop-checkout'>Shop – Checkout</a></li>
                                            <li><a href='/shop-compare'>Shop – Compare</a></li>
                                            <li>
                                                <a href="#">Shop Invoice<i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu">
                                                    <li><a href='/shop-invoice-1'>Shop Invoice 1</a></li>
                                                    <li><a href='/shop-invoice-2'>Shop Invoice 2</a></li>
                                                    <li><a href='/shop-invoice-3'>Shop Invoice 3</a></li>
                                                    <li><a href='/shop-invoice-4'>Shop Invoice 4</a></li>
                                                    <li><a href='/shop-invoice-5'>Shop Invoice 5</a></li>
                                                    <li><a href='/shop-invoice-6'>Shop Invoice 6</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Vendors <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='/vendors-grid'>Vendors Grid</a></li>
                                            <li><a href='/vendors-list'>Vendors List</a></li>
                                            <li><a href='/vendor-details-1'>Vendor Details 01</a></li>
                                            <li><a href='/vendor-details-2'>Vendor Details 02</a></li>
                                            <li><a href='/vendor-dashboard'>Vendor Dashboard</a></li>
                                            <li><a href='/vendor-guide'>Vendor Guide</a></li>
                                        </ul>
                                    </li>
                                    <li className="position-static">
                                        <a href="#">Mega menu <i className="fi-rs-angle-down"></i></a>
                                        <ul className="mega-menu">
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Fruit & Vegetables</a>
                                                <ul>
                                                    <li><a href='/shop-product-right'>Meat & Poultry</a></li>
                                                    <li><a href='/shop-product-right'>Fresh Vegetables</a></li>
                                                    <li><a href='/shop-product-right'>Herbs & Seasonings</a></li>
                                                    <li><a href='/shop-product-right'>Cuts & Sprouts</a></li>
                                                    <li><a href='/shop-product-right'>Exotic Fruits & Veggies</a></li>
                                                    <li><a href='/shop-product-right'>Packaged Produce</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Breakfast & Dairy</a>
                                                <ul>
                                                    <li><a href='/shop-product-right'>Milk & Flavoured Milk</a></li>
                                                    <li><a href='/shop-product-right'>Butter and Margarine</a></li>
                                                    <li><a href='/shop-product-right'>Eggs Substitutes</a></li>
                                                    <li><a href='/shop-product-right'>Marmalades</a></li>
                                                    <li><a href='/shop-product-right'>Sour Cream</a></li>
                                                    <li><a href='/shop-product-right'>Cheese</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Meat & Seafood</a>
                                                <ul>
                                                    <li><a href='/shop-product-right'>Breakfast Sausage</a></li>
                                                    <li><a href='/shop-product-right'>Dinner Sausage</a></li>
                                                    <li><a href='/shop-product-right'>Chicken</a></li>
                                                    <li><a href='/shop-product-right'>Sliced Deli Meat</a></li>
                                                    <li><a href='/shop-product-right'>Crab and Shellfish</a></li>
                                                    <li><a href='/shop-product-right'>Frozen Meat</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-34">
                                                <div className="menu-banner-wrap">
                                                    <a href='/shop-product-right'><img src="assets/imgs/banner/banner-menu.png" alt="Nest" /></a>
                                                    <div className="menu-banner-content">
                                                        <h4>Hot deals</h4>
                                                        <h3>Don't miss<br /> Trending</h3>
                                                        <div className="menu-banner-price">
                                                            <span className="new-price text-success">Save to 50%</span>
                                                        </div>
                                                        <div className="menu-banner-btn">
                                                            <a href='/shop-product-right'>Shop now</a>
                                                        </div>
                                                    </div>
                                                    <div className="menu-banner-discount">
                                                        <h3><span>25%</span> off</h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='/blog-category-grid'>Blog <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='/blog-category-grid'>Blog Category Grid</a></li>
                                            <li><a href='/blog-category-list'>Blog Category List</a></li>
                                            <li><a href='/blog-category-big'>Blog Category Big</a></li>
                                            <li><a href='/blog-category-fullwidth'>Blog Category Wide</a></li>
                                            <li>
                                                <a href="#">Single Product Layout<i className="fi-rs-angle-right"></i></a>
                                                <ul className="level-menu level-menu-modify">
                                                    <li><a href='/blog-post-left'>Left Sidebar</a></li>
                                                    <li><a href='/blog-post-right'>Right Sidebar</a></li>
                                                    <li><a href='/blog-post-fullwidth'>No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='/page-contact'>Contact</a>
                                    </li>
                                    <li>
                                        <a href='/page-account'>My Account</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="hotline d-none d-lg-flex">
                        <img src="assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                        <p>1900 - 6666<span>24/7 Support Center</span></p>
                    </div>
                    <p className="mobile-promotion">Grand opening, <span>up to 15% off</span> all items. Only <span>3 days</span> left</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
