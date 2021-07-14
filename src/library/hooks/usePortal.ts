import React, {useCallback, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {DOMHelper as helper} from '../functions/DOMHelper';

interface PortalProps {
    id?: string;
    container?: HTMLElement | (() => HTMLElement);
}

function usePortal(props: PortalProps = {}) {
    const {id, container} = props;
    const rootElemRef: any = useRef<Element | HTMLElement>(helper.canUseDOM ? document.body : null);

    useEffect(() => {
        const containerElement: any = typeof container === 'function' ? container() : container;

        // Look for existing target dom element to append to
        const existingParent: any = id && document.querySelector(`#${id}`);

        // Parent is either a new root or the existing dom element
        const parentElement: any = containerElement || existingParent || document.body;

        rootElemRef.current = parentElement;
    }, [rootElemRef, container, id]);

    const Portal: React.FC<any> = useCallback(
        ({children}: { children: React.ReactNode }) => {
            if (rootElemRef.current != null) return createPortal(children, rootElemRef.current);
            return null;
        },
        [rootElemRef]
    );

    return {target: rootElemRef.current, Portal};
}

export default usePortal;