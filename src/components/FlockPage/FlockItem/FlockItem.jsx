import './FlockItem.css'
import { useHistory } from 'react-router-dom';

export default function FlockItem(floofProp) {
    const floof = floofProp.floof
    const counter = floofProp.counter
    const imageUrl = `images/floofs/floof${floof.floof_id}.png`
    const floofDiv = `floof${floof.floof_id}Div`
    const history = useHistory();

    console.log('counter is', counter)
    console.log('floofProp is', floofProp)


    // clicking the floof brings the user to their profile
    const handleClick = () => {
        history.push(`/floof/${floof.id}`);
    }

    return (
        <div className="floof">
            <img 
                className={floofDiv}
                src={imageUrl} 
                onClick={handleClick}
            />
        </div>
    )
}