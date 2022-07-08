

import crypto from 'node:crypto';

export default function md5Hex(data: string) {
    const hash = crypto.createHash('md5');

    const update = (buffer: crypto.BinaryLike) => {
        hash.update(buffer);
    };

    update(data);

    return hash.digest('hex');
}