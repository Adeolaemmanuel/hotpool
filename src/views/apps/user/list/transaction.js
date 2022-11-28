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
import { useSelector } from "react-redux";

const TransactionList = () => {
  const totalTransaction = useSelector((state) => state.transaction.data);

  return (
    <div className="app-user-list">
      <Row>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="primary"
            statTitle="Total transactions"
            icon={<User size={20} />}
            renderStats={
              <h3 className="fw-bolder mb-75">{totalTransaction?.length}</h3>
            }
          />
        </Col>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="danger"
            statTitle="Success transactions"
            icon={<UserPlus size={20} />}
            renderStats={<h3 className="fw-bolder mb-75"></h3>}
          />
        </Col>
        <Col lg="4" sm="6">
          <StatsHorizontal
            color="success"
            statTitle="Failed transactions"
            icon={<UserCheck size={20} />}
            renderStats={<h3 className="fw-bolder mb-75"></h3>}
          />
        </Col>
      </Row>
      <TransactionsTable />
    </div>
  );
};

export default TransactionList;
