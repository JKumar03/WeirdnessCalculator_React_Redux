import React from "react";
import { mount } from "enzyme";
import { LikedCard } from "./liked-card";
import { reduxify, withRoutes } from "../../utils/testUtil";

const props = {
    gif: {
        title: "",
        url: "",
        searchId: "",
        wierdness: 0,
        import_datetime: "",
        searchTerm: ""
    },
    deleteIcon: true
}

describe('liked-card', () => {
    it('shoud render LikedCard component with Card and Dialog', () => {
        const wrapper = mount(reduxify(withRoutes(<LikedCard {...props} />)));
        expect(wrapper.find("WithStyles(ForwardRef(Card))").length).toEqual(1);
        expect(wrapper.find("WithStyles(ForwardRef(Dialog))").length).toEqual(1);
    })
})