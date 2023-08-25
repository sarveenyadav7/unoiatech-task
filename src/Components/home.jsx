import Logo from '../Images/Fortmatic 2x.svg'
import Clipboard from '../Images/clipboard-list-solid.svg'
import Userprofile from '../Images/download.png'
import Zoom from '../Images/zoom.png'
import Netflix from '../Images/netflix.jpg'
import Adobe from '../Images/adobe.png'
import Atlassian from '../Images/atlassian.jpeg'

function Home() {
    return (

        <>
            <div className="container">
                <header>
                    <div className="left-col">
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className="right-col">
                        <div className="icons">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                        </div>
                        <div className="icons">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                </header>

                <div className="heading">
                    <nav>
                        <div className="people">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <p>People</p>
                        </div>
                        <div className="user">
                            <i class="fa fa-building" aria-hidden="true"></i>
                            <p>Companies</p>
                        </div>
                        <div className="lists">
                            <i class="fa fa-address-card" aria-hidden="true"></i>
                            <p>Lists</p>
                        </div>
                    </nav>
                </div>
                <div className='second-row'>
                    <div className='breadcrumb'>
                        <div className='contacts'>
                            <p>Contacts</p>
                        </div>
                        <div className='arrow'>
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div className='contacts'>
                            <p>Sandra Silva</p>
                        </div>
                    </div>
                    <div className='breadcrumb1'>
                        <div className='add-dropdown'>
                            <img src={Clipboard} alt='clipboard' />
                            <p>Add to Lists</p>
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                        <div className='action'>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            <p>Action</p>
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>



                <div className='main-container'>

                    <div className='left-container'>
                        <div className='profile-frame'>
                            <div className='img-frame'>
                                <div className='sub-frame'>
                                    <img src={Userprofile} alt='profile-img' />
                                </div>
                                <div className='name-description'>
                                    <h6>Sandra Silva</h6>
                                    <p>CEO at <span>ZOOM</span></p>
                                </div>
                            </div>
                            <div className='social-connection'>
                                <div className='sub-container'>
                                    <div className='social-icons'>
                                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icons'>
                                        <i class="fa fa-google" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icons'>
                                        <i class="fa fa-skype" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icons'>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icons'>
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icons'>
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                    </div>
                                    <div className='social-icons'>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='description'>
                            <p>As CEO of LinkedIn, I am deeply passionate about connecting professionals around the world and empowering them to build meaningful careers. In my years with LinkedIn, I've been fortunate to work alongside talented and innovative colleagues, and together we have developed the world's leading professional networking platform. As CEO of LinkedIn, I am deeply passionate about connecting professionals around the world and empowering them to build meaningful careers.</p>
                        </div>

                        <div className='residence-details'>

                            <div className='email-details'>
                                <div className='col1'>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>

                                </div>
                                <div className='col2-color'>
                                    <p>View email address</p>
                                </div>
                                <div className='col3'>
                                    <p>Bussiness</p>
                                </div>
                            </div>

                            <div className='hq-details'>
                                <div className='col1'>
                                    <i class="fa fa-bookmark" aria-hidden="true"></i>

                                </div>
                                <div className='col2-color'>
                                    <p>View HQ number</p>
                                </div>
                                <div className='col3'>
                                    <p>HQ</p>
                                </div>
                            </div>
                            <div className='seniority-details'>
                                <div className='col1'>
                                    <i class="fa fa-building" aria-hidden="true"></i>

                                </div>
                                <div className='col2'>
                                    <p>Seniority</p>
                                </div>
                                <div className='col3'>
                                    <p>C-Level</p>
                                </div>
                            </div>

                            <div className='location-details'>
                                <div className='col1'>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>

                                </div>
                                <div className='col2-location'>
                                    <p>Location</p>
                                </div>
                                <div className='col3-location'>
                                    <p>New York, NY, USA</p>
                                </div>
                            </div>

                            <div className='gender-details'>
                                <div className='col1'>
                                    <i class="fa fa-user" aria-hidden="true"></i>

                                </div>
                                <div className='col2'>
                                    <p>Gender</p>
                                </div>
                                <div className='col3'>
                                    <p>Male</p>
                                </div>
                            </div>

                            <div className='funding-details'>
                                <div className='col1'>
                                    <i class="fa fa-usd" aria-hidden="true"></i>

                                </div>
                                <div className='col2'>
                                    <p>Funding</p>
                                </div>
                                <div className='col3'>
                                    <p>$8M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mid-container'>
                        <div className='contact-info'>
                            <i class="fa fa-info-circle" aria-hidden="true"><span>Contact Information</span></i>
                        </div>
                        <div className='email-phone-address'>
                            <div className='email-details1'>
                                <div className='email-col'>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <p>Mail</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Bussiness</p>
                                <p className='business-color-code'>View Email Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Personal Mail</p>
                                <p className='business-color-code'>View Email Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Other Mail</p>
                                <p className='business-color-code'>View Email Address</p>
                            </div>

                            <div className='email-details1'>
                                <div className='email-col'>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <p>Phone</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Work Phone</p>
                                <p className='business-color-code'>View Mobile Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Personal Phone</p>
                                <p className='business-color-code'>View Mobile Address</p>
                            </div>
                            <div className='email-details2'>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                                <p>Other Phone</p>
                                <p className='business-color-code'>View Mobile Address</p>
                            </div>
                        </div>
                        <div className='worked-location'>
                            <div className='contact-info'>
                                <i class="fa fa-globe" aria-hidden="true"><span>Location Worked at</span></i>
                            </div>
                            <div className='worked-location-details'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>New York, NY, USA</p>
                            </div>
                            <div className='worked-location-details'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>Huston Texas, USA</p>
                            </div>
                            <div className='worked-location-details'>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                <p>Los Angeles California, USA</p>
                            </div>
                        </div>
                        <div className='skills-contact-info'>
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <p>Skills</p>
                            <p className='skills-color-code'>Microsoft Office, Microsoft Excel, Leadership, Microsoft Word, Research, Powerpoint, Public Speaking, Social Media, Marketing</p>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='contact-info'>
                            <i class="fa fa-suitcase" aria-hidden="true"><span>Companies Worked at</span></i>
                        </div>
                        <div className='companies'>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Zoom} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Zoom</h5>
                                    <p>2020 - Present</p>
                                </div>
                            </div>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Netflix} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Netflix</h5>
                                    <p>2019 - 2020</p>
                                </div>
                            </div>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Adobe} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Adobe</h5>
                                    <p>2015 - 2019</p>
                                </div>
                            </div>
                            <div className='companies-info'>
                                <div className='companies-icon'>
                                <img src={Atlassian} alt='zoom' />
                                </div>
                                <div className='zoom-detail'>
                                    <h5>Atlassian</h5>
                                    <p>2012 - 2015</p>
                                </div>
                            </div>
                        </div>
                        <div className='qualification'>
                            <div className='contact-info'>
                            <i class="fa fa-graduation-cap" aria-hidden="true"><span>Qualifications</span></i>
                            </div>
                            <div className='worked-location-details'>
                            <i class="fa fa-book" aria-hidden="true"></i>
                                <p>Master of Science, Economics</p>
                            </div>
                            <div className='worked-location-details'>
                            <i class="fa fa-book" aria-hidden="true"></i>
                                <p>Bachlor of Science, Economics</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home