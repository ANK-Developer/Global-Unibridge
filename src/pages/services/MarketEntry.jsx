import ServiceDetail from '../../components/ServiceDetail/ServiceDetail.jsx'
import { serviceDetails } from '../../data/serviceDetails.js'

export default function MarketEntry() {
  return <ServiceDetail data={serviceDetails['india-market-entry']} />
}
