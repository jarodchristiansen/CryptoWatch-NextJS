import { useRouter, withRouter } from 'next/router';

function AssetDetails() {
    const router = useRouter();

    let id = router.query.id
    console.log(router.query)

    return (
        <div>
            <h1>Hello Assets Details</h1>
            {id}
        </div>
    )
}

export default AssetDetails;