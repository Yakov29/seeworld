import criteria1 from "../../images/criteria1.png";
import criteria2 from "../../images/criteria2.png";
import criteria3 from "../../images/criteria3.png";
import criteria4 from "../../images/criteria4.png";

const initialState = {
  services: [
    {
      image: criteria1,
      name: "Будинки",
    },
    {
      image: criteria2,
      name: "Студії",
    },
    {
      image: criteria3,
      name: "Квартири",
    },
    {
      image: criteria4,
      name: "Кімнати",
    },
  ],
};

export const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addService" :
        return {
            ...state,
            services: [...state.services, action.payload],
        }
    }
    return state
};
