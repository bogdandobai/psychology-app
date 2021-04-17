import firestore from '@react-native-firebase/firestore';
import {Alert} from "react-native";
import {NavigationService} from "@src/services/navigation.service";

/**
 * GROUPS
 */
export async function getGroups(){
  const groups = []
  const snapshot = await firestore()
    .collection("groups")
    .get()
  snapshot.forEach((group)=>{
    groups.push(group.data());
  })
  return groups;
}

export async function addGroup(name: string, description: string){
  await firestore().collection("groups").add({
    name,
    description
  }).then((docRef) => {
    firestore().collection('groups').doc(docRef.id).update({
      id: docRef.id
    }).then(()=>{
      Alert.alert('Grup Adugat cu Succes!')
      getGroups().then(()=>{
        NavigationService.pop();
      })
    })
  })
}

export async function deleteGroup(id: string) {
  await firestore().collection("groups").doc(id).delete();
}


/**
 * GROUP_MEETINGS
 */
export async function getMeetings(){
  const meetings = []
  const snapshot = await firestore()
    .collection("group_meetings")
    .orderBy('date',"asc")
    .get()
  snapshot.forEach((meeting)=>{
    meetings.push(meeting.data());
  })
  return meetings;
}

export async function getGroupMeetingsByGroupId(id: string){
  const groupMeetings = []
  const snapshot = await firestore()
    .collection("group_meetings")
    .where('groupId', '==', id)
    .get()
  snapshot.forEach((meeting)=>{
    groupMeetings.push(meeting.data());
  })
  return groupMeetings;
}

export async function deleteGroupMeeting(id:string){
  await firestore().collection("group_meetings").doc(id).delete();
}

export async function createGroupMeeting(title, description){
  await firestore().collection("group_meetings").add({
    title,
    description
  }).then((docRef) => {
    firestore().collection('group_meetings').doc(docRef.id).update({
      id: docRef.id
    }).then(()=>{
      Alert.alert('Grup Adugat cu Succes!')
      getGroups().then(()=>{
        NavigationService.pop();
      })
    })
  })
}

/**
 * Notes
 */
export async function getNotes(id: string){
  const notes = []
  const snapshot = await firestore()
    .collection("notes")
    .where('meetingId', '==', id)
    .get()
  snapshot.forEach((note)=>{
    notes.push(note.data());
  })
  return notes;
}


/**
 * Users
 */

export async function getUser(uid) {
  let user = {}
  const snapshot = await firestore().collection('users').where('id','==',uid).get();
  snapshot.forEach((newUser) => {
    user=newUser.data();
  })
  return user
}

export async function getUsers(){
  const users = []
  const snapshot = await firestore()
    .collection("users")
    .get()
  snapshot.forEach((user)=>{
    users.push(user.data());
  })
  return users;
}


export async function createUser(id: string, email: string, name: string, cnp: string, type: string, groupId: string) {
  await firestore().collection('users').add({
    id,
    email,
    name,
    cnp,
    type,
    groupId
  }).then((docRef) => {
    Alert.alert('Client Adugat cu Succes!')
    NavigationService.pop();
  })
}
