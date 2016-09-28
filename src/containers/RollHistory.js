import { connect } from 'react-redux'
import RollHistoryComponent from '../components/RollHistory'

const mapStateToProps = (state) => ({
  rollHistory: state.rollHistory
})

const RollHistory = connect(
  mapStateToProps
)(RollHistoryComponent)

export default RollHistory
