import Link from 'next/link';

function HomePage() {
    const clients = [
        {id: 'max', name: 'Maximillian'},
        {id: 'manu', name: 'Manuel'},    
    ];
    return (
        <div>
            <h1>Hello Home Page</h1>
            <ul>

                {clients.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/assets/[id]',
                            query: {
                                id: client.id,
                            }
                        }}>{client.name}</Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default HomePage;