import { Link } from "react-router-dom";

/**
 * 
 *         <a href="index.html" className="active-nav"><i className="fa fa-home"></i><span>Home</span></a>
        <a href="index-components.html"><i className="fa fa-star"></i><span>자유게시판</span></a>
        <a href="index-pages.html"><i className="fa fa-heart"></i><span>중고거래</span></a>
        <a href="index-search.html"><i className="fa fa-search"></i><span>코칭</span></a>
        <a href="#" data-menu="menu-settings"><i className="fa fa-cog"></i><span>마이페이지</span></a>
 */
function Footer() {
  return (
    <div>
      <footer id="footer-bar" className="footer-bar-1">

        <Link to="/"><i className="fa fa-home"></i><span>Home</span></Link>
        <Link to="/freeBoard"><i className="fa fa-star"></i><span>자유게시판</span></Link>
        <Link to="/usedBoard"><i className="fa fa-heart"></i><span>중고거래</span></Link>
        <Link to="/coaching"><i className="fa fa-search"></i><span>코칭</span></Link>
        <Link to="/myPage"><i className="fa fa-cog"></i><span>마이페이지</span></Link>
      </footer>
    </div>
  )
}

export default Footer