// import logo from './logo.svg';
import "./App.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImFlag } from "react-icons/im";
import { BsTicketPerforated } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { SiStarbucks } from "react-icons/si";
import { AiFillCar } from "react-icons/ai";
import first from "./Images/smart.jpg";
import second from "./Images/smart1.jpg";
import third from "./Images/smart2.jpg";
import fourth from "./Images/smart3.jpg";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImCheckboxChecked } from "react-icons/im";
import user from "./Images/download.png";
import Card1 from "./Images/card1.jpg";
import Card2 from "./Images/card2.jpg";
import Card3 from "./Images/card3.jpg";
import Card4 from "./Images/card4.jpg";
import { BiMessageDetail } from "react-icons/bi";
import{FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa';
import {CiFolderOff} from 'react-icons/ci'
import {BsFacebook} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a class="navbar-brand mx-5 px-5 " href="#">
            {" "}
            <BsInboxes />
            TrueLayer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-3 px-3 elements">
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  Product <AiFillCaretDown />{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  solution
                  <AiFillCaretDown />{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  Developers
                  <AiFillCaretDown />{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  Resources
                  <AiFillCaretDown />{" "}
                </a>
              </li>
            </ul>
            <a class="navbar-brand  mx-5 px-5 " href="#">
              GB <AiFillCaretDown />
            </a>
            <div className="GAP">
              <button type="button " class="btn btn-outline-dark mx-3">
                Contact Us
              </button>
              <button type="button" class="btn btn-outline-danger">
                Signin
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <hr />

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 style={{ color: "gray" }} className="my-5 ">
              Open banking payments Network{" "}
            </h3>
            <h1 className="afterNav mx-0">
              A Payments <br />
              Network built <br /> for growth
            </h1>
            <p>
              Built on the back of open banking, our{" "}
              <span className="inafternavp">payments network</span> connects
              banks, people and brands that think big across the UK and Europe.
            </p>
            <button type="button" class="btn btn-outline-danger">
              Signin
              <AiOutlineArrowRight />
            </button>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
      {/* home page ends */}
      {/* about us starts here*/}
      <div className="container">
        <div className="row">
          <div className="col-12 background mx-5 my-5 position">
            <div className="div bordr">
              <p>$35</p>
              <br />
              <p>annualised Tv</p>
            </div>
            <div className="div border2">
              <p>46m</p>
              <br />
              <p>transactions</p>
            </div>
            <div className="div border3">
              <p>1</p>
              <br />
              <p>Platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* about section ends here */}
      <div className="marquee-container">
        <div className="marquee " style={{ fontSize: "3rem" }}>
          Trading betcity revoult cazoo plumm freetrade oakNorth bank{" "}
        </div>
      </div>

      <div className="container-fluid maindiv">
        <div
          className="row  px-5 my-5"
          style={{ fontSize: "4rem", color: "whitesmoke" }}
        >
          Simplifying payments with powerful products
        </div>
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-md-6 height">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Payments
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Accept and send instant bank payments in any app or
                      website.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Payouts
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Boost loyalty with frictionless payouts that take seconds
                      not days.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Variable Recurring payments
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Increase success rates with repeat payments that settle
                      instantly.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Signup+
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Convert more customers by streamlining onboarding with a
                      single payment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 circle ">
              <div className="inner-div">
                <div className="middlebox">
                  <p>Instant Bank Payment</p>
                  <p>Fast safe and secure</p>
                  <p>Authenticate using your bank app </p>
                  <p>No need to enter your card details </p>
                  <button type="button" class="btn btn-dark">
                    Dark
                  </button>
                </div>
              </div>
              <div className="upperdiv">
                <AiFillPlusCircle />
                Signup Instantly <br />
                No more endless forms
              </div>
              <div className="upperdiv2">
                <ImCheckboxChecked /> <br />
                You’re signed up <br />
                we’ve received your deposit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* payments sector ends here */}
      {/* intergretion sector starts here */}
      <div className="container hello">
        {/* Images are not working  */}
        <div className="row">
          <h1>Integration toolkit</h1>
          <p>Everything you need to build faster with TrueLayer.</p>
          <div className="col-md-3">
            <img src={first} alt="" height={200} width={200} />
            <h4>Payment UIs</h4>
            <p>
              Optimise conversion with our plug-and-play{" "}
              <a href="">embedded payment page and hosted payment page.</a>
            </p>
          </div>
          <div className="col-md-3">
            <img
              src={second}
              alt="myimage1"
              height={200}
              width={200}
              srcset=""
            />
            <h4>Platform plugins</h4>
            <p>
              Add bank payments to your online shop with AiOutlineArrowRight{" "}
              <a href="">WooCommerce and Magento plugins.</a>
            </p>
          </div>
          <div className="col-md-3">
            <img
              src={third}
              alt="myimage1"
              height={200}
              width={200}
              srcset=""
            />
            <h4>Mobile SDKs</h4>
            <p>
              Build a smoother mobile payments experience with SDKs for
              <a href=""> iOS and Android.</a>
            </p>
          </div>
          <div className="col-md-3">
            <img
              src={fourth}
              alt="myimage1"
              height={200}
              width={200}
              srcset=""
            />
            <h4>Libraries</h4>
            <p>
              Explore our <a href="">backend libraries</a> in Java, PHP, C# and
              Javascript/Node.
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-danger"
        style={{ marginLeft: "7rem" }}
      >
        Signin
        <AiOutlineArrowRight />
      </button>
      <hr />

      <div className="container bigdiv">
        <div className="child">
          <span>
            <ImFlag /> Freetrade
          </span>
          <span>
            <BsTicketPerforated /> CitizenTicket
          </span>
          <span>
            <BsBank /> OakNorth Bank
          </span>
          <hr />
          <p>
            By using TrueLayer’s open banking API we get <br /> the best of both
            worlds – there’s a simplified in <br /> -app deposit flow, but with
            cost-effective processing.
          </p>
          <div className="imagediv">
            <img src={user} height={100} width={100} alt="damon" />
            <h5>
              Damon Roberts
              <br />
              Product Manager <br />
              <span>
                <ImFlag /> Freetrade
              </span>
            </h5>
          </div>
          <AiOutlineArrowRight />
          Read the case Study
          <hr />
        </div>
      </div>

      <div className="container mydiv">
        <div className="row">
          <div className="col-md-6 outerchild ">
            <h3>Financial Services</h3>
            <p>
              {" "}
              help customers manage and make more <br /> of their money with
              one-off <br /> and regular payments
            </p>
            <AiOutlineArrowRight />
            Learn More
          </div>
          <div className="col-md-6 innerchild ">
            <div className="divclass">
              <h4>
                Welcome Julie{" "}
                <span>
                  {" "}
                  <MdAccountCircle />
                </span>{" "}
              </h4>
              <div className="paymentgateway">
                <h4> Your account balance</h4>
                <h3>$15,000.00</h3>
                <button type="button " class="btn btn-light">
                  WithDraw <AiOutlineDownload />
                </button>
                <button type="button" class="btn btn-dark mx-3">
                  Topup <AiOutlinePlusCircle />
                </button>
              </div>
              <div className="transaction">
                <p style={{ fontSize: "20px" }}> Your Transaction </p>
                <p className="transact"> see all </p>
              </div>
              <div className="transaction">
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  <SiStarbucks />
                  Starbucks <br />
                  7th sept2023{" "}
                </p>
                <p className="transact"> $9.40 </p>
              </div>
              <div className="transaction">
                <p style={{ fontSize: "20px" }}>
                  <AiFillCar /> Car Wash{" "}
                </p>
                <p className="transact">$15.00 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid secondlastback my-3">
        <div className="row ">
          <h2 style={{ fontSize: "5rem", marginLeft: "2rem" }}>Resources</h2>
          <div className="col-md-3  px-5 ">
            <div class="card" style={{ width: "300px", height: "400px" }}>
              <img src={Card1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Launching the open Finance Association
                </h5>
                <p class="card-text">
                  TrueLayer is thrilled to announce our membership in the newly
                  Launched Open Finance Association (Ofa).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div class="card" style={{ width: "300px", height: "400px" }}>
              <img src={Card2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Ecommerce:3 things to consider in an open banking payments
                  Provider.
                </h5>
                <p class="card-text">
                  With open Banking evolving all the time , how can online
                  retailers find the perfect partner to help them build their
                  paymens use case?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div class="card" style={{ width: "300px", height: "400px" }}>
              <img src={Card3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Open Banking to open Finance:Bridging the gap
                </h5>
                <p class="card-text">
                  As the end of the OBIE's roadmap approaches,we outline the
                  need for the Programme of work that we 're calling 'open
                  banking +' to bridge to gap to open Finance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div class="card" style={{ width: "300px", height: "400px" }}>
              <img src={Card4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  What are the benefits of open banking for businesses?
                </h5>
                <p class="card-text">
                  How companies across the UK are unlocking the benefits of open
                  bankings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-dark py-3 my-4"
          style={{ marginLeft: "43rem", borderRadius: "30px 10px 30px 10px " }}
        >
          Signin <AiOutlineArrowRight />
        </button>
        <div className="row">
          <div className="col-md-6">
            <div class="card cardline1" style={{ width: "15rem" }}>
              <div class="card-body">
                <h2>
                  <BiMessageDetail />
                </h2>
                <h5 class="card-title">Talk to us</h5>

                <p class="card-text">
                  We're here to help you make the most of open banking payments.
                </p>
                <button type="button" class="btn btn-danger">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 dekho">
            <div class="card cardline2" style={{ width: "15rem" }}>
              <div class="card-body">
                <h2>
                  <CiFolderOff />
                </h2>
                <h5 class="card-title">Start building</h5>

                <p class="card-text">
                  Create an account now to explore our APIs.
                </p>
                <button type="button" class="btn btn-danger">
                  SignIn <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* footer start */}

      <div className="container-fluid mainfooter">
        <div className="row mx-5 py-5">
          <div className="firstfotter">
            <h2 style={{ fontSize: "30px", color: "whitesmoke" }}>
              Insights straight to your inbox <br />
              Join 10,000+ subscribers getting <br /> the latest open banking
              news
            </h2>
            <input
              type="text"
              name=""
              className="inputtype"
              id=""
              placeholder="Your name "
            />
            <button type="button" class="btn btn-danger lastbutton">
              Subscribe{" "}
            </button>
          </div>
          <hr className="horizontal" />
          <div className="col-md-2 my-3">
            <h5 className="lasth5"> PRODUCTS</h5>
            <h5 className="lasth5"> Payments</h5>
            <h5 className="lasth5"> Payouts</h5>
            <h5 className="lasth5"> VRP</h5>
            <h5 className="lasth5"> Signup+</h5>
            <h5 className="lasth5"> Data</h5>
            <h5 className="lasth5"> Verification </h5>
          </div>
          <div className="col-md-2 my-3">
            <h5 className="lasth5"> DEVELOPERS</h5>
            <h5 className="lasth5">API reference </h5>
            <h5 className="lasth5"> Console</h5>
            <h5 className="lasth5">Support </h5>
            <h5 className="lasth5">Status page </h5>
          </div>
          <div className="col-md-2 my-3">
            <h5 className="lasth5">COMPANY </h5>
            <h5 className="lasth5">Contact </h5>
            <h5 className="lasth5">About us </h5>
            <h5 className="lasth5">Careers </h5>
          </div>
          <div className="col-md-2 my-3">
            <h5 className="lasth5">BLOG </h5>
            <h5 className="lasth5"> All posts</h5>
            <h5 className="lasth5">Announcements </h5>
            <h5 className="lasth5">Culture </h5>
            <h5 className="lasth5">Engineering </h5>
            <h5 className="lasth5">Open banking </h5>
            <h5 className="lasth5">Payments </h5>
            <h5 className="lasth5">Product </h5>
          </div>
          <div className="col-md-2 my-3">
            <h5 className="lasth5">RESOURCES </h5>
            <h5 className="lasth5">Blog </h5>
            <h5 className="lasth5">Customer stories </h5>
            <h5 className="lasth5">Events </h5>
            <h5 className="lasth5">Reports </h5>
          </div>
          <div className="col-md-2 my-3">
            <h5 className="lasth5">LEGAL </h5>
            <h5 className="lasth5">Complaints policy </h5>
            <h5 className="lasth5">Employee privacy policy </h5>
            <h5 className="lasth5">Security </h5>
            <h5 className="lasth5">Privacy policy </h5>
            <h5 className="lasth5">End-user ToS </h5>
          </div>
          <hr className="horizontal" />

          <div className="col-6">
            <p style={{color:"gray"}}>
              © TrueLayer Ltd. 2023. TrueLayer is authorised and regulated by
              the UK Financial Conduct Authority under the Payment Services
              Regulations 2017 and Electronic Money Regulations 2011 (Firm
              Reference Number: 901096)
            </p>
          </div>
          
          <div className="col-6">
            <div className="icons">
            <h5><BsFacebook/> </h5>
            <h5><FaLinkedinIn/></h5>
            <h5><BsInstagram/></h5>
            <h5><FaTwitterSquare/></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
