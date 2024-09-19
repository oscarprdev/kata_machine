type Node<T> = {
    value: T,
    prev?: Node<T>
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    head?: Node<T>
    tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }   

    prepend(item: T): void {
        const node = { value: item } as Node<T>

        this.length++
        if (!this.head) {
            this.head = this.tail = node
            return
        }

        this.head.prev = node
        node.next = this.head
        this.head = node
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('index greated than length')
        } else if (idx === this.length) {
            this.append(item)
            return
        } else if (idx === 0) {
            this.prepend(item)
            return
        }

        let current = this.getAt(idx)
        if (current) {
            const node = { value: item } as Node<T>

            this.length++

            node.next = current
            node.prev = current?.prev
    
            current.prev = node
    
            if (node.prev) {
                node.prev.next = node
            }
        }
    }

    append(item: T): void {
        const node = { value: item } as Node<T>
        
        this.length++
        if (!this.head || !this.tail) {
            this.head = this.tail = node
            return
        }

        node.prev = this.tail

        this.tail.next = node
        this.tail = node
    }

    remove(item: T): T | undefined {
        const node = { value: item } as Node<T>

        let current = this.head
        for (let i = 0; current && i < this.length; ++i) {
            if (current.value === node.value) break
            current = current.next
        }

        if (!current) return undefined

       return this.removeNode(current)
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }

    removeAt(idx: number): T | undefined {
        const curr = this.getAt(idx)

        if (!curr) return undefined

        return this.removeNode(curr)
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next
        }

        return curr
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--
        if (this.length === 0) {
            const out = this.head?.value
            this.head = this.tail = undefined
            return out
        }

        if (node.prev) {
            node.prev.next = node.next
        } 

        if (node.next) {
            node.next.prev = node.prev
        } 
        
        if (node === this.head) {
            this.head = node.next
        }
        
        if (node === this.tail) {
            this.tail = node.prev
        }

        node.next = node.prev = undefined

        return node.value
    }
 }