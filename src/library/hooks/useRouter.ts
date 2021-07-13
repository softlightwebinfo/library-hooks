import {useHistory, useLocation, useParams, useRouteMatch,} from "react-router-dom";
import queryString from "query-string";
import {useMemo} from "react";

export const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    return useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            query: {
                ...queryString.parse(location.search), // Convert string to object
                ...params,
            },
            match,
            location,
            history,
        };
    }, [params, match, location, history]);
};