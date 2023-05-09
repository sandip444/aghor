import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../style'
const GraphicDesigning = () => {
    return (
        <>
            <div className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white`}>
                <div className="bg-[#bf132f]">
                    <img className="max-w-[80%] mx-auto" src={require('../../../assets/images/services/Graphic-Design.svg').default} alt="services" />
                </div>

                <div className="md:py-20 py-8">
                    <h1 className="text-3xl mb-8">Top Quality Graphic Design Services for User-friendly Experience</h1>
                    <div className="text-justify gap-2 grid grid-cols-1">
                        <p>
                            Designing is all about creativity and art which has its own set of advantages and applications in creative as well as corporate platforms. We are a creative and innovative designing agency that offers a wide range of design services that include an artistic touch to communicate with your target audience.
                        </p>
                        <p>
                            Designing is an integral part of the 360-degree development of your brand, business, or company which enables a comprehensive establishment. Graphic designing is our main forte and we are versatile and diverse in the field. Graphic designing is a form of art, and at Aghori Media House Pvt. Ltd, a group of young creative graphic design artists come up with unique, creative, meaningful, abstract, and eye-catching graphic designs which help in developing a creative and inventive ad for your branding or business marketing purpose.
                        </p>
                        <p>
                            People love to see art and they may not remember words or speeches but visualizations are the highest memory receptors. This simply means that people remember what they see, just like in movies. People never forget their favourite movie, even if they have watched it once. Similarly, our graphic design artists do a job that is goal-oriented and result-based. Our graphic designers are responsible for designing content for products and various activities related to print, advertising, websites, magazines, brand identity, personal identity, etc.
                        </p>
                        <p>
                            We grant the liberty to our graphic designers to express imagination and creativity to the fullest. Whatever you imagine and visualize can be put in the form of display for others to appreciate, admire and even criticize.
                        </p>
                        <p>
                            Learning new techniques and skills gives us the advantage of being at the top of the line as we are well aware of new software and techniques to use for your fulfilling purpose or target.
                        </p>
                    </div>
                    
                </div>

                {/* Logo start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10"><span className="font-extralight ">Logo</span><br /> Design</h3>

                        <p>
                            Amidst the sea of competition, your brand logo has the power to shine brightly, and grab the attention of your target audience. Your logo design should possess an artistic touch that effectively communicates with your audience. The logo should effectively represent your company, its beliefs, and what it aims to offer. Our artistic team at Aghori Media takes immense pleasure in this challenging process of creativity. We also assist you in domain name registration and registration of the trademark logo.
                        </p>
                        {/* icon */}

                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/graphic/OBSERVE_LOGO_DESIGN.png')} alt="graphic" className="invert  w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">OBSERVE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/graphic/IDEA_LOGO_DESIGN.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">IDEA</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/graphic/IDENTITY_LOGO_DESIGN.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">IDENTITY</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/graphic/CREATE_LOGO_DESIGN.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">CREATE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/graphic/TRADE_MARK_LOGO_DESIGN.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">TRADEMARK</h4>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Logo End */}

                {/* Business Stationery start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10"><span className="font-extralight ">Business</span><br /> Stationery</h3>

                        <p>
                            Amidst the sea of competition, your brand logo has the power to shine brightly, and grab the attention of your target audience. Your logo design should possess an artistic touch that effectively communicates with your audience. The logo should effectively represent your company, its beliefs, and what it aims to offer. Our artistic team at Aghori Media takes immense pleasure in this challenging process of creativity. We also assist you in domain name registration and registration of the trademark logo.Amidst the sea of competition, your brand logo has the power to shine brightly, and grab the attention of your target audience. Your logo design should possess an artistic touch that effectively communicates with your audience. The logo should effectively represent your company, its beliefs, and what it aims to offer. Our artistic team at Aghori Media takes immense pleasure in this challenging process of creativity. We also assist you in domain name registration and registration of the trademark logo.
                        </p>
                        {/* icon */}

                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/business/BUSINESS-CARD-VISITNG-CARD.png')} alt="graphic" className="invert  w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">BUSINESS CARD
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/business/LETTERHEAD_STATIONEY_BRAND_COMPANY.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">LETTERHEAD</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/business/ENVELOPE_DESIGN_INVITEE_LETTER.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">ENVELOPE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/business/INVOICE_BUSINESS_BILLBOOK_CHALLANE.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">INVOICE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/business/BUSINESS_DIARY_NOTEPAD_WRITING_PAD.png')} alt="graphic" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">WRITING PAD
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Business Stationery End */}

                {/* Corporate Kit start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10"><span className="font-extralight ">Corporate</span><br /> Kit</h3>

                        <p>
                            As we know that visuals triumph text, eye-pleasing graphics become more important. Marketing through brochures, pamphlets, calendars, coffee table books, leaflets, and info graphics becomes increasingly necessary. And these mediums need to deliver the right visuals suitable for your brand. We take pride in creating dynamic and relevant graphic designs that attract the attention of the receiver.
                        </p>
                        {/* icon */}

                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/corporate-kit/CORPORATE_KIT_INVITEE.png')} alt="INVITE" className="invert  w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">INVITE
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/corporate-kit/COMPANY_PROFILE_CORPORATE_PROFILE_BUSINESS.png')} alt="COMPANY-PROFILE" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">COMPANY PROFILE
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/corporate-kit/BROCHURE_CORPORATE_KIT_CATALOGUE_DESIGN.png')} alt="BROCHURE" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">BROCHURE</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/corporate-kit/RATECARD_MENU_COFFEE _TABLE_BOOK.png')} alt="RATE-CARD" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">RATE CARD
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/corporate-kit/CALENDAR_CORPORATE_GIFT_MUG_BOOK_PEN.png')} alt="CALENDAR" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">CALENDAR
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Corporate Kit End */}

                {/* Packaging Kit start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10"><span className="font-extralight ">Packaging</span><br /> Kit</h3>

                        <p>
                            The style of packaging also impacts the way a consumer views your brand. It has to appeal to your audience. We align your brand identity with our creative designs, to generate relevant and appealing packaging designs. Our goal-oriented graphic designers will help you design your cartons, packets, price tags, tickets, etc. to further raise your brand awareness. These experts with their wide imagination will leave no room for regret.
                        </p>
                        {/* icon */}

                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/packaging/PRICE_TAG_PACAGING_LABEL.png')} alt="PRICE-TAG" className="invert  w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">PRICE TAG

                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/packaging/SHOPPING_BAG_CREATIVE_BAG.png')} alt="SHOPPING-BAG" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">SHOPPING BAG
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/packaging/PRODUCT_BOX_PACKAGING.png')} alt="PRODUCT-BOX" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">PRODUCT BOX</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/packaging/PACKAGING_INNOVATIVE_BOX_CREATIVE.png')} alt="INNOVATIVE-BOX" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">INNOVATIVE BOX
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Packaging Kit End */}

                {/* Marketing Tools start */}
                <hr />
                <div className="md:py-20 py-10 gap-4 grid grid-cols-1 md:grid-cols-6 text-justify">
                    {/* Heading & icon*/}
                    <div className="col-span-3">
                        <h3 className="text-3xl md:text-5xl leading-normal mb-10"><span className="font-extralight ">Marketing</span><br /> Tools</h3>

                        <p>
                            With a handy team of designers, Aghori Media excels in the process of creating visually enticing content. We commit to generating compelling promotion and publicity content that brings your brand in the limelight. All you need to do is trust us once. We can efficiently translate your brand message into a visual delight. From banners, standees, posters to clothing & magazine ads, we design all and with passion.
                        </p>
                        {/* icon */}

                    </div>

                    {/* Content  */}
                    <div className="col-span-3 md:pl-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/MARKETING_VOUCHER_DM.png')} alt="VOUCHER" className="invert  w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">VOUCHER

                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/POSTER_FLYER_PHAMPHLET_MARKETING.png')} alt="POSTER" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">POSTER
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/DANGLER_MARKETING_BUNTINGS.png')} alt="DANGLER" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">DANGLER</h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/TANT_CARD_DESIGN_MARKETING_DISPLAY.png')} alt="TANT-CARD" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">TANT CARD
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/NEWSPAPER_AD_MAGAZINE_DESIGN_MARKETING.png')} alt="NEWSPAPER" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">NEWSPAPER
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/STANDEE_MARKETING_DESIGN.png')} alt="STANDEE" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">STANDEE
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/KIOSK_MARKETING_PROMOTATION_PAID.png')} alt="KIOSK" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">KIOSK
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/BANNER_MARKETING_AD_DESIGN_OFFER.png')} alt="BANNER" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">BANNER
                                </h4>
                            </div>
                            {/* Icon-box */}
                            <div>
                                <img src={require('../../../assets/images/services/marketing/HOARDING_OUTDOOR_OOH_SIGN_BOARD_MARKETING.png')} alt="TANT-CARDHOARDING" className="invert w-[75%] mx-auto" />
                                <h4 className="text-[14px] text-center">HOARDING
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Marketing Tools End */}


                {/* Navigation start */}
                <div className="w-full flex justify-between py-8 md:py-12">
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">Previous Service</Link>
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">See all Services</Link>
                    <Link to="#" className="text-sm md:text-2xl underline underline-offset-1">Next Service</Link>
                </div>
                {/* Navigation start */}

            </div>

        </>
    )
}

export default GraphicDesigning