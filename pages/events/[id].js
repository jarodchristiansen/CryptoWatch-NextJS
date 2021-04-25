import {useRouter, withRouter} from 'next/router';

function EventDetails() {
const router = useRouter();
let id = router.query.id;
    return(
        <div>
            <h1>Events Details Page</h1>
            <h2>Id : {id}</h2>
        </div>
    )
}

export default EventDetails;