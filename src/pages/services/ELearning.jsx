import ServiceDetail from '../../components/ServiceDetail/ServiceDetail.jsx'
import { serviceDetails } from '../../data/serviceDetails.js'

export default function ELearning() {
  return <ServiceDetail data={serviceDetails['e-learning']} />
}
