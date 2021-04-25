import Link from 'next/link';

function HomePage() {
    const routes = [
        {id: '/assets', name:'assets'}
    ]
    return(
        <div>
           <h1>Hello</h1>
           <ul>

        {routes.map((route) => (
            <li key={route.id}>
                <Link href={{
                    pathname: `${route.id}`,
                }}>{route.name}</Link>
            </li>
        ))
        }
</ul>
        </div>
    )
}

export default HomePage;