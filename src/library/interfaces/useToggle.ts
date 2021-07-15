export interface IRsUseToggle {
    toggle: () => void;
    on: () => void;
    off: () => void;
}

export type TRsUseToggle = [boolean, IRsUseToggle];