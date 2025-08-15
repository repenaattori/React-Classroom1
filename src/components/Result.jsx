import './Result.css';

export default function Result({result}){
    return(
        <div className="result" data-testid="res">
            Result is {result}
        </div>
    )
}