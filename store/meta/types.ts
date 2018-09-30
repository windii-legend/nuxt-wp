import { Meta } from '~/models/meta'

export interface MetaState {
    meta: Meta | null;
    error: boolean;
}
