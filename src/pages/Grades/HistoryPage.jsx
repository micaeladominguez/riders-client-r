import {NavBar} from "../../components/NavBar/NavBar";
import HistoryTabs from "../../components/History/HistoryTabs";
import {Grade} from "./Grade";

const HistoryPage = () => {
    return(
        <div>
            <NavBar/>
            <Grade/>
            <HistoryTabs/>
        </div>
    );

}
export default HistoryPage;