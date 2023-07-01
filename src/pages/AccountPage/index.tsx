import { NavLink, Outlet } from 'react-router-dom'
import './AccountPage.css'

const AccountPage = (): JSX.Element => {
  return (
    <section>
      <div className="account-page">
        <div className="left-sidebar">
          <h2>내 계정</h2> 
          <NavLink to="/Account/OrderHistory" style={({ isActive }) => ({ color: isActive ? '#5e90f2' : '#141414' })}>주문내역</NavLink>
          <NavLink to="/Account/EditUserInfo" style={({ isActive }) => ({ color: isActive ? '#5e90f2' : '#141414' })}>개인정보 수정</NavLink>
          <NavLink to="/Account/EditBankInfo" style={({ isActive }) => ({ color: isActive ? '#5e90f2' : '#141414' })}>계좌관리</NavLink>
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default AccountPage;
