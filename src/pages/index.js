import styles from "../styles/Home.module.css"
import Head from "next/head"
//import ManualHeader from "../../components/ManualHeader"
import Header from "../../components/Header"
import LotteryEntrance from "../../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
            {/* <ManualHeader /> */}
        </div>
    )
}
