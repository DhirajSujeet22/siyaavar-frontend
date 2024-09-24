import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSignOutAsync } from "../AuthSlice";
import { selectUserInfo } from "../../User/UserSlice";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  console.log(user);
  useEffect(() => {
    dispatch(UserSignOutAsync());
  }, [dispatch]);
  return <>{user && <Navigate to="/login" replace={true} />}</>;
};

export default LogOut;
