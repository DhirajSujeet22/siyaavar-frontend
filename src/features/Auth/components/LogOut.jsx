import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserCheck, UserSignOutAsync } from "../AuthSlice";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserCheck);

  useEffect(() => {
    dispatch(UserSignOutAsync());
  }, []);

  return <>{user && <Navigate to="/" replace={true} />}</>;
};

export default LogOut;
