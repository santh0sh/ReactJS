
import DepositPage from './containers/DepositPage';
import HomePage from './containers/HomePage'
import WithdrawPage from './containers/WithdrawPage';
import './styles/bankapp.css'

function BankApp() {
  return (
    <div>
      
      <h1 className="bg-danger text-warning">
        Murthy's Corporate Bank</h1>
      <HomePage />      
      <DepositPage/>
      <WithdrawPage/>
      
    </div>
  );
}

export default BankApp;
