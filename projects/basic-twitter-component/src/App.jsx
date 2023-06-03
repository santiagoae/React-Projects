import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    const users = [
        {
            userName: 'tiiago12',
            name: 'Frontend Developer',
            initialIsFolowing: true,
        },
        {
            userName: 'willsmith',
            name: 'Wilson Smith',
            initialIsFolowing: false,
        },
        {
            userName: 'pheralb',
            name: 'peralte',
            initialIsFolowing: false,
        },
        {
            userName: 'elonmusk',
            name: 'Teslita',
            initialIsFolowing: false,
        },
    ]
    return (
        <section className="App">
            {
                users.map(user =>{
                    const { userName, name, initialIsFolowing } = user
                    return(
                        <TwitterFollowCard key={userName} format={formatUserName} userName={userName} initialIsFolowing={initialIsFolowing}>
                            { name }
                        </TwitterFollowCard>
                    )                    
                })
            }
        </section>
        //Otra forma de hacerlo no tan dinamico
        // <div className="App">
        //     <TwitterFollowCard format={formatUserName}  userName="tiiago12" initialIsFolowing>
        //         Frontend Developer
        //     </TwitterFollowCard>
        //     <TwitterFollowCard format={formatUserName}  userName="willsmith">
        //         Wilson Smith
        //     </TwitterFollowCard>
        //     <TwitterFollowCard format={formatUserName}  userName="pheralb">
        //         peralte
        //     </TwitterFollowCard>
        //     <TwitterFollowCard format={formatUserName} userName="elonmusk">
        //         teslita
        //     </TwitterFollowCard>
        // </div>        
    )
}