import { Posts } from "../posts";
import { SideBar } from "../sideBar";
import { Stories } from "../stories";

export const Body = () => (
    <div className="container" >
        <div className="sticky" >
            <main >
                <Stories />
                <Posts />
            </main>
            <SideBar />
        </div>
        <div className="footer-bar-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    </div>
)