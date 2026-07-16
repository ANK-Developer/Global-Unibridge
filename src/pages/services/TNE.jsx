import ServiceDetail from '../../components/ServiceDetail/ServiceDetail.jsx'
import { serviceDetails } from '../../data/serviceDetails.js'

export default function TNE() {
  return <ServiceDetail data={serviceDetails['tne']} />
}
