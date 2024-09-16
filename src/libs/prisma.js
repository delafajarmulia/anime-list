import { PrismaClient } from '@prisma/client';

// singleton instance
// kalo gak pake gini, ada kemungkinan prisma nya overload

let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;