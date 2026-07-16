import ServiceDetail from '../../components/ServiceDetail/ServiceDetail.jsx'
import { serviceDetails } from '../../data/serviceDetails.js'

export default function AgencyModel() {
  return <ServiceDetail data={serviceDetails['agency-recruitment-model']} />
}
