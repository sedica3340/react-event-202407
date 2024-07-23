import React, { useContext, useEffect } from "react";
import EventForm from "../components/EventForm";
import EventContext from "../components/context/event-context";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

const NewEvent = () => {

    const navigate = useNavigate();

    const { totalEventCount } = useContext(EventContext);

    const {role} = useRouteLoaderData('user-data');

    useEffect(()=> {
      if(
        role === 'COMMON' &&
        totalEventCount >= 4
      ) {
        alert('일반 회원은 이벤트 생성이 4개로 제한됩니다.');
        navigate('/events');
      }
    }, [])

    return <EventForm method="post" />;
};

export default NewEvent;
