import { Introduction } from '../components/Introduction'
import {Journey} from "../components/Journey"
import {Marquee} from "../components/Marquee"
import { ImageDrag } from '../components/ImageDrag'
import { Hundreds } from '../components/Hundreds'
import {ViewMore } from '../components/ViewMore'
import { Contributions } from '../components/Contributions'
import { Footer } from '../components/Footer'



export const LandingPage = () => {
    return (
        <div>
            <Introduction />
            <Journey />
            <Marquee />
            <ImageDrag />
            <Hundreds />
            <ViewMore />
            <Contributions />
            <Footer />
        </div>
    )
}
