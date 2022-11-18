
const nodeFactory = (value) => {
    return {
        value: value || null,
        next: null
    }
}

const linkedListFactory = () => {

    let head = null
    let length = 0

    function append(value) {
        const node = nodeFactory(value)
        length++
        if (head === null) {
            head = node
        }
        let link = head
        for (let i = 0; i < length; i++) {
            if (link.next) {
                link = link.next
            }
        }
        link.next = node
    }

    function prepend(value) {
        const node = nodeFactory(value)
        length++
        if (head === null) {
            head = node
        }
        node.next = head
        node.next.next = head.next
        head = node
    }

    function showSize() {
        return length
    }

    function showHead() {
        return head
    }

    function showTail() {
        tail = head
        while (tail.next !== null) {
            tail = tail.next
        }
        return tail
    }

    function at(index) {
        let atIndex = head
        for (let i = 0; i < index; i++) {
            atIndex = atIndex.next
        }
        return atIndex
    }

    function pop() {
        at(showSize() - 2).next = null
        length--
    }

    function contains(value) {
        let values = head
        while (values !== null) {
            if (values.value === value) {
                return true
                break
            }
            values = values.next
        }
        return false
    }

    function find(value) {
        let counter = 0
        let values = head
        while (values !== null) {
            if (values.value === value) {
                return counter
                break
            }
            counter++
            values = values.next
        }
        return null
    }

    function toString() {
        let string = head
        list = ""
        while (string !== null) {
            list += `( ${string.value} ) -> `
            string = string.next
        }
        console.log(list += null)
    }

    function insertAt (value, index) {
        oldNode = at(index)
        previousNode = at(index-1)
        newNode = nodeFactory(value)
        length++
        newNode.next = oldNode
        previousNode.next = newNode
    }

    function removeAt(index) {
        toRemove = at(index)
        previousNode = at(index-1)
        previousNode.next = toRemove.next
        length--
    }

    return {
        append,
        prepend,
        showHead,
        showSize,
        showTail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}