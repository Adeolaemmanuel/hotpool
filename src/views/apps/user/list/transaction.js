// ** User List Component
import TransactionsTable from "./Transtable";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Custom Components
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from "react-feather";

// ** Styles
import "@styles/react/apps/app-users.scss";

const TransactionList = () => {
  return (
    <div className="app-user-list">
      <Row>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="primary"
            statTitle="Total transactions"
            icon={<User size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">319,914</h3>}
          />
        </Col>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="danger"
            statTitle="Success transactions"
            icon={<UserPlus size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">7</h3>}
          />
        </Col>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="success"
            statTitle="Failed transactions"
            icon={<UserCheck size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">319,860</h3>}
          />
        </Col>
      </Row>
      <TransactionsTable />
    </div>
  );
};

export default TransactionList;
