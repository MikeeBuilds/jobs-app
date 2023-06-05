import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isloading, setIsLoading] = useState(true);