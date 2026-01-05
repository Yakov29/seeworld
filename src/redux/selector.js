import { createSelector } from "reselect";
import { useSelector } from "react-redux";

export const useFilterState = (filterCountry) => {
 const state = useSelector((state) => state.announcementReducer.announcements)
 
  console.log(state);
  return state
};



export const memoizedFilterAnnouncements = createSelector(
    [(state) => state.announcements],
    announcements => {
        console.log(announcements)
    }
)