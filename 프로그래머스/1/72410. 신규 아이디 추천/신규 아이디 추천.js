function solution(new_id) {
    let result = new_id.toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "") || "a"
    
    result = result.slice(0, 15).replace(/\.$/, "");
    result = result.padEnd(3, result[result.length - 1]);
    
    return result
}