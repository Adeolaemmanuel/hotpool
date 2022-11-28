// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import Inter from "@src/assets/images/icons/inter.png"
// ** Store & Actions
// import { store } from '@store/store'
// import { deleteInvoice } from '../store'

// ** Reactstrap Imports
import {
  Badge,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle
} from 'react-feather'

// ** Vars
// const invoiceStatusObj = {
//   Sent: { color: 'light-secondary', icon: Send },
//   Paid: { color: 'light-success', icon: CheckCircle },
//   Draft: { color: 'light-primary', icon: Save },
//   Downloaded: { color: 'light-info', icon: ArrowDownCircle },
//   'Past Due': { color: 'light-danger', icon: Info },
//   'Partial Payment': { color: 'light-warning', icon: PieChart }
// }

// ** renders client column
// const renderClient = row => {
//   const stateNum = Math.floor(Math.random() * 6),
//     states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
//     color = states[stateNum]

//   if (row.avatar.length) {
//     return <Avatar className='me-50' img={row.avatar} width='32' height='32' />
//   } else {
//     return <Avatar color={color} className='me-50' content={row.client ? row.client.name : 'John Doe'} initials />
//   }
// }

const maskNo = (no) => {
  return no.replace(/\d{12}(\d{4})/, "************$1")
}


// ** Table columns
export const columns = [
  // {
  //   name: 'Email',
  //   sortable: true,
  //   sortField: 'fldemail',
  //   // minWidth: '107px',
  //   cell: row => <span>{row.fldemail}</span>
  // },
  {
    name: 'Ref No',
    sortable: true,
    sortField: 'ReferenceNo',
    // minWidth: '57px',
    // selector: row => row.id,
    cell: row => <span>{row.ReferenceNo}</span>
  },
  {
    name: 'Timestamp',
    sortable: true,
    sortField: 'TransDate',
    // minWidth: '170px',
    // selector: row => row.id,
    cell: row => <span style={{ fontWeight: 800 }}>{row.TransDate}</span>
  },
  {
    name: 'Source',
    sortable: true,
    sortField: 'QuerySource',
    // minWidth: '107px',
    // selector: row => row.id,
    cell: row => <div className="d-flex align-items-center">
      <img style={{ width: "15px", marginRight: "0.5rem" }} src={Inter} alt="" />
      <div>
        <p className="mb-0">{row.QuerySource}</p>
        <span style={{ fontSize: "10px", fontWeight: "800" }}>₦ {row.TransAmount}</span>
      </div>
    </div>
  },
  {
    name: 'Card Pan',
    sortable: true,
    sortField: 'ParamCalled',
    // minWidth: '107px',
    // selector: row => row.id,
    cell: row => <span>{maskNo(row.ParamCalled)}</span>
  },
  // {
  //   name: 'Transaction Amount',
  //   sortable: true,
  //   sortField: 'TransAmount',
  //   // minWidth: '107px',
  //   cell: row => <span>N {row.TransAmount}</span>
  // },
  {
    sortable: true,
    name: 'Response Message',
    // minWidth: '164px',
    sortField: 'ResponseMessage',
    // selector: row => row.balance,
    cell: row => {
      return row.ResponseMessage !== "Result Found" ? (
        <Badge color='light-danger' pill>
          {row.ResponseMessage}
        </Badge>
      ) : (
        <Badge color='light-success' pill>
          {row.ResponseMessage}
        </Badge>
      )
    }
  },
  {
    sortable: true,
    name: 'Reason',
    sortField: 'EndPointSource',
    // selector: row => row.balance,
    // eslint-disable-next-line no-unused-vars
    cell: row => <span>{row.ResponseFromSource.message}</span>

  }
  // {
  //   sortable: true,
  //   minWidth: '102px',
  //   sortField: 'invoiceStatus',
  //   name: <TrendingUp size={14} />,
  //   // selector: row => row.invoiceStatus,
  //   cell: row => {
  //     const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
  //       Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
  //     return (
  //       <Fragment>
  //         <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row.id}`} />
  //         <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
  //           <span className='fw-bold'>{row.invoiceStatus}</span>
  //           <br />
  //           <span className='fw-bold'>Balance:</span> {row.balance}
  //           <br />
  //           <span className='fw-bold'>Due Date:</span> {row.dueDate}
  //         </UncontrolledTooltip>
  //       </Fragment>
  //     )
  //   }
  // }
  // {
  //   name: 'Client',
  //   sortable: true,
  //   minWidth: '350px',
  //   sortField: 'client.name',
  //   // selector: row => row.client.name,
  //   cell: row => {
  //     const name = row.client ? row.client.name : 'John Doe',
  //       email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
  //     return (
  //       <div className='d-flex justify-content-left align-items-center'>
  //         {renderClient(row)}
  //         <div className='d-flex flex-column'>
  //           <h6 className='user-name text-truncate mb-0'>{name}</h6>
  //           <small className='text-truncate text-muted mb-0'>{email}</small>
  //         </div>
  //       </div>
  //     )
  //   }
  // },
  // {
  //   name: 'Total',
  //   sortable: true,
  //   minWidth: '150px',
  //   sortField: 'total',
  //   // selector: row => row.total,
  //   cell: row => <span>${row.total || 0}</span>
  // },
  // {
  //   sortable: true,
  //   minWidth: '200px',
  //   name: 'Issued Date',
  //   sortField: 'dueDate',
  //   cell: row => row.dueDate
  //   // selector: row => row.dueDate
  // },

  // {
  //   name: 'Action',
  //   minWidth: '110px',
  //   cell: row => (
  //     <div className='column-action d-flex align-items-center'>
  //       <Send className='cursor-pointer' size={17} id={`send-tooltip-${row.id}`} />
  //       <UncontrolledTooltip placement='top' target={`send-tooltip-${row.id}`}>
  //         Send Mail
  //       </UncontrolledTooltip>
  //       <Link to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}>
  //         <Eye size={17} className='mx-1' />
  //       </Link>
  //       <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
  //         Preview Invoice
  //       </UncontrolledTooltip>
  //       <UncontrolledDropdown>
  //         <DropdownToggle tag='span'>
  //           <MoreVertical size={17} className='cursor-pointer' />
  //         </DropdownToggle>
  //         <DropdownMenu end>
  //           <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
  //             <Download size={14} className='me-50' />
  //             <span className='align-middle'>Download</span>
  //           </DropdownItem>
  //           <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
  //             <Edit size={14} className='me-50' />
  //             <span className='align-middle'>Edit</span>
  //           </DropdownItem>
  //           <DropdownItem
  //             tag='a'
  //             href='/'
  //             className='w-100'
  //             onClick={e => {
  //               e.preventDefault()
  //               store.dispatch(deleteInvoice(row.id))
  //             }}
  //           >
  //             <Trash size={14} className='me-50' />
  //             <span className='align-middle'>Delete</span>
  //           </DropdownItem>
  //           <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
  //             <Copy size={14} className='me-50' />
  //             <span className='align-middle'>Duplicate</span>
  //           </DropdownItem>
  //         </DropdownMenu>
  //       </UncontrolledDropdown>
  //     </div>
  //   )
  // }
]
