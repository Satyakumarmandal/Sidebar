
import './App.css';
import { IconName, FaSistrix, FaSearch, FaMenorah, FaAd, FaPlus } from "react-icons/fa";
import { Container, Table, Input, Button, Card, CardTitle, CardBody, CardFooter, Row, Col, Pagination, PaginationItem, PaginationLink, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { PieChart } from 'react-minimal-pie-chart';

function MainContent() {
  return (
    <div className="containe-fluid">
      <div className="main-content">
        <div className="search-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className="input" type="search" placeholder="Search" aria-label="Search" />
        </div>
        <div className="dsb">
          <i className="addd"><FaPlus />Add sit</i>
          <i className="add"></i> <h1 className="">Dashboard</h1>

          <p>Last 30 days(ago)</p>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col"> 
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avg Uptime</h5>
                  <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fsm%2F20171126%2Fsm_5a1ad63f21109.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-png&tbnid=p4lw9DrNszpfiM&vet=12ahUKEwizn8C4mIv8AhX0idgFHcf7DtMQMygRegUIARCFAg..i&docid=FskQ4abOqP4JGM&w=360&h=360&q=png%20images%20free&ved=2ahUKEwizn8C4mIv8AhX0idgFHcf7DtMQMygRegUIARCFAg" className="rounded mx-auto d-block" />
                  <h6>94.7%</h6>


                  <a href="#" className="btn btn-primary">Go to details</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avg Resposive Time </h5>
                  <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fsm%2F20171126%2Fsm_5a1ad63f21109.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-png&tbnid=p4lw9DrNszpfiM&vet=12ahUKEwizn8C4mIv8AhX0idgFHcf7DtMQMygRegUIARCFAg..i&docid=FskQ4abOqP4JGM&w=360&h=360&q=png%20images%20free&ved=2ahUKEwizn8C4mIv8AhX0idgFHcf7DtMQMygRegUIARCFAg" className="rounded mx-auto d-block" />
                  <h6>226ms</h6>
                  <a href="#" className="btn btn-primary">Go to details</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Alert</h5>
                  <h6>226ms</h6>

                  <a href="#" className="btn btn-primary">Go to details</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container crd">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">Site</div>
                    <div className="p-2 flex-fill bd-highlight">Uptime</div>
                    <div className="p-2 flex-fill bd-highlight">ProPower</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cd">
                <div className="card-body">
                  <div>
                    <label className="up">uptime</label>
                    <input className="tb" type="tb" />

                  </div>
                  <div>
                    <label className="up">Paytm</label>
                    <input className="tb" type="tb" />
                  </div>


                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cd">
                <div className="card-body">
                  <h5 className="card-title">Alert</h5>
                </div>
              </div>
            </div>
            <div className="container crd2">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex bd-highlight">
                      <div className="p-2 flex-fill bd-highlight">Date</div>
                      <div className="p-2 flex-fill bd-highlight">Url</div>
                      <div className="p-2 flex-fill bd-highlight">Type</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>





  )
}
export default MainContent;