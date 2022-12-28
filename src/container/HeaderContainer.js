import { connect } from "react-redux";
import Header from "../components/Header"

const mapDispatchToProps=dispatch=>({
})
const mapStateToProps=state=>({
    productData:state.cardItems
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
//export default Home;