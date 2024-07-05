import { product } from './Product';

const Image = ({data}) => {
  return (
    <div>
       <img src={data.image_url}/>
    </div>
  )
}

export default Image