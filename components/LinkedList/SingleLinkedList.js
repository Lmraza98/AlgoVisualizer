export const SingleLinkedList = () => {
    var head = undefined
    var length = 0

    return {
        insert: (item) => {
            if (!item) return

            var node = new NodeClass(item)

            if (head) {
                node.next = head
            }

            head = node
            length++
        },
        delete: (value) => {
            var curr = head

            if (head.value === value) {
                head = head.next
                return
            }

            while (curr) {
                if (curr.next) {
                    var next = curr.next

                    if (next.value === value) {
                        curr.next = next.next
                        length--
                        break
                    }
                }

                curr = curr.next
            }
        },
        search: (value) => {
            var curr = head
            var found = undefined

            while (curr) {
                if (curr.value === value) {
                    found = curr
                    break
                }

                curr = curr.next
            }

            return found
        },
        get size() {
            return length
        },
        print: () => {
            var result = []

            var curr = head
            while (curr) {
                result.push(curr.value)

                curr = curr.next
            }

            return result
        },
    }
}
